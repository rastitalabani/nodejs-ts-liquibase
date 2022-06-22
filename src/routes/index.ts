import { Request, Response, Router } from "express";
import Todo from "../db/migrations/entities/todo";

const router = Router();

router.get("/todos", async (req: Request, res: Response) => {
  Todo.findAll()
    .then((todo) => res.send(todo))
    .catch((e) => {
      console.log("Error:", e);
      res.sendStatus(500);
    });
});

router.post("", async (req: Request, res: Response) => {
  const { name: taskName } = req.body;

  Todo.create({ name: taskName })
    .then((todo) => res.send(todo))
    .catch((e) => {
      console.log("Error:", e);
      res.sendStatus(500);
    });
});

router.put("/:id", async (req: Request, res: Response) => {
  const { name: taskName, status } = req.body;
  const { id } = req.params;

  Todo.findByPk(id)
    .then((todo) =>
      todo?.update({ name: taskName, status }).then(() => res.send(todo))
    )
    .catch((e) => {
      console.log("Error:", e);
      res.sendStatus(500);
    });
});

export default router;
