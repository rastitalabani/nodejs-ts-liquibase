import Todo from "@src/entities/Todo";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/todos", async (req: Request, res: Response) => {
  Todo.findAll()
    .then((todo) => res.send(todo))
    .catch((e) => {
      console.log("Error:", e);
      res.sendStatus(500);
    });
});

router.post("/todos", async (req: Request, res: Response) => {
  const { name: taskName } = req.body;

  Todo.create({ name: taskName })
    .then((todo) => res.send(todo))
    .catch((e) => {
      console.log("Error:", e);
      res.sendStatus(500);
    });
});

router.put("/todos/:id", async (req: Request, res: Response) => {
  const { name: taskName, status } = req.body;
  const { id } = req.params;

  Todo.findByPk(id)
    .then((todo) =>
      todo?.update({ name: taskName, status }).then(() => res.send(todo))
    )
    .catch((e) => {
      console.log("Error:", e);
      res.sendStatus(404);
    });
});

export default router;
