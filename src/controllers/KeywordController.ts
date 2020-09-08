import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class KeywordController {

  @Get("/keywords")
  getAll() {
    return "This action returns all keywords";
  }

  @Get("/keywords/:id")
  getOne(@Param("id") id: number) {
    return "This action returns keyword #" + id;
  }

  @Post("/keywords")
  post(@Body() keyword: any) {
    return "Saving keyword...";
  }

  @Put("/keywords/:id")
  put(@Param("id") id: number, @Body() keyword: any) {
    return "Updating a keyword...";
  }

  @Delete("/keywords/:id")
  remove(@Param("id") id: number) {
    return "Removing keyword...";
  }

}