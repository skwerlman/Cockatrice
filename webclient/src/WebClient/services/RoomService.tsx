import { Dispatch } from 'store/rooms';

import { WebClient } from '../WebClient';

export class RoomService {
  webClient: WebClient;

  constructor(webClient) {
    this.webClient = webClient;
  }

  clearStore() {
    Dispatch.clearStore();
  }

  joinRoom(roomInfo) {
    Dispatch.joinRoom(roomInfo);
  }

  updateRooms(rooms) {
    Dispatch.updateRooms(rooms);
  }

  updateGames(roomId, gameList) {
    Dispatch.updateGames(roomId, gameList);
  }

  addMessage(roomId, message) {
    const { name } = message;

    if (name) {
      message.message = `${name}: ${message.message}`;
    }

    Dispatch.addMessage(roomId, message);
  }

  userJoined(roomId, user) {
    Dispatch.userJoined(roomId, user);
  }

  userLeft(roomId, name) {
    Dispatch.userLeft(roomId, name);
  }
}
