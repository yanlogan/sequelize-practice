const express = require('express');
const { sequelize, User, Post } = require('./models');

const app = express();

// express middleware
app.use(express.json());

app.post('/users', async(req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch(err) {
    console.log(err);
    return res.status(500).json({ error: 'Oops, something went wrong.'});
  }
})

app.get('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const users = await User.findOne({
      where: { uuid },
      include: ['posts']
    });
    return res.json(users);
  } catch(err) {
    console.log(err);
    return res.status(500).json({ error: 'Oops, something went wrong.'});
  }
})

app.delete('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const user = await User.findOne({
      where: { uuid },
      include: ['posts']
    });
    const posts = user.posts;
    await user.destroy();
    posts.forEach(post => {
      post.destroy();
    });
    return res.json('User deleted');
  } catch(err) {
    console.log(err);
    return res.status(500).json( { error: 'Oops, something went wrong.' });
  }

})

app.put('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;

  try {
    const user = await User.findOne({ where: { uuid }});
    user.name = name;
    user.email = email;
    user.role = role;
    await user.save();
    return res.json('User updated');
  } catch(err) {
    console.log(err);
    return res.status(500).json( { error: 'Oops, something went wrong.' });
  }
})

app.post('/posts', async (req, res) => {
  const { userUuid, title, body } = req.body;
  
  try {
    const user = await User.findOne({
      where: { uuid: userUuid }
    });

    const post = await Post.create({
      title,
      body,
      userId: user.id
    });
    return res.json(post);
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: ['user'] });
    return res.json(posts);
  } catch(err) {
    console.log(err);
    return res.status(500).json({ error: 'Oops, something went wrong.'});
  }
})

app.delete('/posts/:uuid', async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const post = await Post.findOne({ where: { uuid }});
    await post.destroy();
    return res.json('Post deleted');
  } catch(err) {
    console.log(err);
    return res.status(500).json( { error: 'Oops, something went wrong.' });
  }

})

app.put('/posts/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const { title, body } = req.body;

  try {
    const post = await Post.findOne({ where: { uuid }});
    post.title = title;
    post.body = body;
    await post.save();
    return res.json('Post updated');
  } catch(err) {
    console.log(err);
    return res.status(500).json( { error: 'Oops, something went wrong.' });
  }
})

app.listen({ port: 5000 }, async () => {
  console.log('Server up on http://localhost:5000');
  await sequelize.authenticate();
  console.log('Database connected!');
});