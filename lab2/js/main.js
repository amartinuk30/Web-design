import CommentListModel from './model/CommentListModel.js';
import CommentListView from './view/View.js';
import Controller from './controller/Controller.js';

let commentListModel = new CommentListModel();
let commentListView = new CommentListView(commentListModel);

let controller = new Controller(commentListModel, commentListView);

controller.addComm('Удачі.', 'Коментатор1', 'false');
controller.addComm('Хороший гравець !', 'Коментатор2', 'false');
