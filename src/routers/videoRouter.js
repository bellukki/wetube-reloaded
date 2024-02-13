import express from "express";
import {
  watch,
  getEdit,
  getUpload,
  postUpload,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

/*
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);
*/

export default videoRouter;