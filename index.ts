import { connect } from "http2";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient()

async function main() {
        // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Mischiko",
    //         email: "mischikomoe@gmail.com"
    //     }
    // })
    // console.log(user)

        // Get all users
    // const users = await prisma.user.findMany()
    // console.log(users)

        // Create article
    // const article = await prisma.post.create({
    //     data: {
    //         tittle: "This is my second post!",
    //         content: "Hiiiiiiiiiii!!",
    //         author: {
    //             connect: {
    //                 id: 2
    //             }
    //         }
    //     }
    // })
    // console.log(article)

        // Get article
    // const articles = await prisma.post.findMany()
    // console.log(articles)

        // Create user and article
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Cameira",
    //         email: "cameiraazami@proton.me",
    //         posts: {
    //             create: {
    //                 tittle: "Hiyaa!! I'm Cameira!",
    //                 content: "This is my first post btw"
    //             }
    //         }
    //     }
    // })
    // console.log(user)

        // Get user with their article
    // const users = await prisma.user.findMany({
    //     include: {
    //         posts: true
    //     }
    // })
    // console.log(users)

        // loop over article
    // const users = await prisma.user.findMany({
    //     include: {
    //         posts: true
    //     }
    // })
    // users.forEach((user) => {
    //     console.log(`Id: ${user.id}, User: ${user.name}, Email: ${user.email}`)
    //     console.log('Articles:')
    //     user.posts.forEach((post) => {
    //         console.log(`PostId: ${post.id}, Tittle: ${post.tittle}, Content: ${post.content}, Published: ${post.published}, AuthorId: ${post.authorId}`)
    //     })
    //     console.log('\n')
    // })

        // update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 2
    //     },
    //     data: {
    //         name: "Mischiko Moo"
    //     }
    // })
    // console.log(user)

        // remove article
    // const article = await prisma.post.delete({
    //     where: {
    //         author: {
    //             id: 3
    //         },
    //         id: 1
    //     }
    // })
    // console.log(article)
}   

(async () => {
  try {
    await main()
  } catch (e) {
    console.error(e) 
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})();

    // schema.prisma
// model User {
//   id    Int @id @default(autoincrement())
//   email String @unique
//   name String
//   posts Post[]
//   comments Comment[]
// }

// model Post {
//   id    Int @id @default(autoincrement())
//   tittle String
//   content String
//   published DateTime @default(now())
//   author User @relation(fields: [authorId], references: [id])
//   authorId Int
//   comments Comment[]
// }

// model Comment {
//   id    Int @id @default(autoincrement())
//   text  String
//   createdAt DateTime @default(now())
//   author User @relation(fields: [authorId], references: [id])
//   authorId Int
//   post Post @relation(fields: [postId], references: [id])
//   postId Int
// }