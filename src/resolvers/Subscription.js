const Subscription = {
    comment: {
        subscribe(parent, { postId }, { db }, info) {
            const post = db.posts.find(pos => post.id === postId && post.published)

            if (!post) {
                throw new Error('Post not found')
            }

            return pubsub.asyncIterator(`comment ${postId}`) // "comment 44"
        }   
    },
    post: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('post')
        }
    }
}

export { Subscription as default}