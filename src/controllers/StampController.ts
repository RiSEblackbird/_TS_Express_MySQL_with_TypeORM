import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class StampController {

  @Get("/stamps")
  getAll() {
    return "This action returns all stamps";
  }

  @Get("/stamps/:id")
  getOne(@Param("id") id: number) {
    return "This action returns stamp #" + id;
  }

  @Post("/stamps")
  post(@Body() stamp: any) {
    return "Saving stamp...";
  }

  @Put("/stamps/:id")
  put(@Param("id") id: number, @Body() stamp: any) {
    return "Updating a stamp...";
  }

  @Delete("/stamps/:id")
  remove(@Param("id") id: number) {
    return "Removing stamp...";
  }

}