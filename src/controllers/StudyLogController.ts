import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class StudyLogController {

  @Get("/studyLogs")
  getAll() {
    return "This action returns all studyLogs";
  }

  @Get("/studyLogs/:id")
  getOne(@Param("id") id: number) {
    return "This action returns studyLog #" + id;
  }

  @Post("/studyLogs")
  post(@Body() studyLog: any) {
    return "Saving studyLog...";
  }

  @Put("/studyLogs/:id")
  put(@Param("id") id: number, @Body() studyLog: any) {
    return "Updating a studyLog...";
  }

  @Delete("/studyLogs/:id")
  remove(@Param("id") id: number) {
    return "Removing studyLog...";
  }

}