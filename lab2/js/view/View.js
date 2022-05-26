
export class CommentView {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
   toHtml() {
         if (this.commentModel.remove_check == 'true'){
        return `<li class="clearfix">
        <div class="post-comments">
          <p class="meta">${this.commentModel.time}<t> ${this.commentModel.name} </t>
          <button data-id="${this.commentModel.id}" class="rep-button">Відповісти</button>
            <button data-id="${this.commentModel.id}" class="del-button">Видалити</button>
          </p>
          <p>
          ${this.commentModel.body}
          </p>
        </div>
      </li>`;
         }
         else if(this.commentModel.remove_check == 'false'){
            return `<li class="clearfix">
            <div class="post-comments">
              <p class="meta">${this.commentModel.time}<t> ${this.commentModel.name} </t>
              <button data-id="${this.commentModel.id}" class="rep-button">Відповісти</button>
              </p>
              <p>
              ${this.commentModel.body}
              </p>
            </div>
          </li>`;
             }
    }
}

export default class CommentListView {
    constructor(commentListModel) {
        this.commentListModel = commentListModel;
        this.controllerOnAddItem = null;
        this.controllerOnDelItem = null;
        this.controllerOnRepItem = null;
        document.querySelector('#comment-field').addEventListener('click', (e) => this.onClick(e)); 
    }

    setControllerOnAddItem(controllerOnAddItem) {
        this.controllerOnAddItem = controllerOnAddItem;
    }

    setControllerOnDelItem(controllerOnDelItem) {
        this.controllerOnDelItem = controllerOnDelItem;
    }

    setControllerOnRepItem(controllerOnRepItem) {
        this.controllerOnRepItem = controllerOnRepItem;
    }

    onClick(e) {
        if (e.target.className === 'del-button') {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        }
        if  (e.target.className === 'rep-button'){
            this.controllerOnRepItem(e.target.dataset.id);
            return;
        }
    }

    onAddItem(e) {
        let commentArea = document.getElementById('comment-area');
        let body = commentArea.value;
        commentArea.value = '';
        this.controllerOnAddItem(body, 'Name_Surname', 'true');
    }

    toHtml() {
        const commentsHtml = this.commentListModel.comments.map( (comment) => {
            const commentView = new CommentView(comment);
            return commentView.toHtml();
        }).join("");
        return `${commentsHtml}`;
    }
}

