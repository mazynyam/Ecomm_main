import mongoose from 'mongoose'

const PageSchema = new mongoose.Schema({
    title: String,
    content: String,
  })
  const Page = mongoose.model('Page', PageSchema)

export default Page