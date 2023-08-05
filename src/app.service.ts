import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getUsers() {
    return [{ name: "1" }, { name: "2" }];
  }
}
