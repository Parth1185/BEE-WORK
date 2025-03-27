const express = require ("express");
const router = express.Router();

router.post("/", async (req, res) => {   //async function return promises
  let { title, content, author } = req.body;
  let newBlog = new Blog({ title, content, author });
  await newBlog.save();
  res.send("Blog Added");
});

router.get("/", async (req, res) => {
  let allblogs = await Blog.find();
  res.send(allblogs);
})

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let oneblog = await Blog.findById(id);
  res.send(oneblog)
})

router.delete("/:id", async (req,res)=>{
  let {id} = req.params;
  await Blog.findByIdAndDelete(id);
  res.send("Blog deleted...")
})

router.put("/:id", async (req,res)=>{
  let {id} = req.params;
  let blog = await Blog.findById(id);
  let {title,content,author} = req.body;
  blog.title = title;
  blog.content = content;
  blog.author = author;
  await blog.save();
  res.send(blog);
  // res.send("Blog Updated...")
})


module.exports = router;