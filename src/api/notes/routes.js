/**
 * @description Routes for notes
 * V1.0.0
 * deprecated
 */

/*
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  updateNoteByIdHandler,
  deleteNoteByIdHanlder,
} = require('./handler');

const routesV1 = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHanlder,
  },
];
*/

/**
 * @description V2.0.0 Routes for notes handler
 * make it become pure function by making it accept handler parameter
 * and not explicit call a handler
 *
 * @param {*} handler
 * @returns handler function
 */
const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler, // postNoteHandler hanya menerima dan menyimpan satu note
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getNotesHandler, // getNotesHandler mengembalikan banyak note
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler, // getNoteByIdHandler mengembalikan satu note
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler, // putNoteByIdHandler hanya menerima dan mengubah satu note
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler, // deleteNoteByIdHandler menghapus satu note
  },
];

module.exports = routes;
