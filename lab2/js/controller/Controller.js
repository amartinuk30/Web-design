import Comment from "../model/Comment.js";

export default class Controller {
    constructor(commentListModel, commentListView) {
        this.commentListModel = commentListModel;
        this.commentListView = commentListView;

        this.commentListView.setControllerOnAddItem(this.addComm);
        this.commentListView.setControllerOnDelItem(this.delComm);
        this.commentListView.setControllerOnRepItem(this.repComm);
        this.initOnModelChange();
        document.querySelector('#comment-add').addEventListener('click', (e)=>commentListView.onAddItem(e));
        
    }
   
    addComm(body, name, remove_check) {
        const comment = new Comment(body, name, remove_check);
        this.commentListModel.add(comment);
    }

    repComm(name) {
        this.commentListModel.reply(name);
    }

    delComm(id) { 
        this.commentListModel.delete(id);
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#comment-field').innerHTML = this.commentListView.toHtml();
                return true;
            }
        }
        this.commentListModel.comments = new Proxy(this.commentListModel.comments, handler);
    }
}



