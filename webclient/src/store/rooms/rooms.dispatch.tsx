import { Actions } from './rooms.actions';
import { store } from '../store';

export const Dispatch = {
  updateRooms: rooms => {
    store.dispatch(Actions.updateRooms(rooms));
  },

  joinRoom: roomInfo => {
    store.dispatch(Actions.joinRoom(roomInfo));
  },

  leaveRoom: roomId => {
    store.dispatch(Actions.leaveRoom(roomId));
  },

  addMessage: (roomId, message) => {
    store.dispatch(Actions.addMessage(roomId, message));
  },

  updateGames: (roomId, games) => {
    store.dispatch(Actions.updateGames(roomId, games));
  },

  userJoined: (roomId, user) => {
    store.dispatch(Actions.userJoined(roomId, user));
  },

  userLeft: (roomId, name) => {
    store.dispatch(Actions.userLeft(roomId, name));
  }
}