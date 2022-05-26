export default class CommentListModel {
    constructor() {
        this.comments = [];
        this.onChangeCallback = null;
    }

    add(comment) {
        comment.onChangeCallback = this.onChangeCallback;
        this.comments.push(comment);
    }

    reply(commentId){
        const commentIndex = this.comments.find( (comment) => comment.id === commentId); 
        let commentArea = document.getElementById('comment-area');
        commentArea.value = commentIndex.name + ', ';
    }
   
    delete(commentId) {
        const commentIndex = this.comments.findIndex( (comment) => comment.id === commentId); 
        this.comments.splice(commentIndex, 1);
    }
}
