const express = require("express");
const { filteredNewsController } = require("../../controller/newsController/filteredNewsController");
const router = express.Router();

// Example News Routes
router.get("/", (req, res) => {
  res.json({ message: "Fetching all news articles..." });
});

router.get("/:keyword",async (req,res,next)=>{
    try {
      const {keyword}=req.params;
      const response=await filteredNewsController({keyword:keyword,next});
      res.json(response);
    } catch (error) {
      next(error);
    }
    res.json()
})

module.exports = router; // ✅ Make sure you're exporting `router`
