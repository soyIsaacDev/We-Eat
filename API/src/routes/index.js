const server = require("express").Router();
const express = require("express");
const { Restaurante } = require("../db");
const { Op } = require("sequelize");
const cors = require("cors");


server.use(cors());

server.get("/restaurants", async (req, res) => {
    try {
      const Restaurantes= await Restaurant.findAll({
      });
      res.json(Restaurantes);
    } catch (error) {
      res.send(error);
    }
  });