const server = require("express").Router();
const express = require("express");
const { Restaurantes } = require("../db");
const { Op } = require("sequelize");
const cors = require("cors");
const Corporativo = require("../models/Corporativo");


server.use(cors());

server.get("/restaurants", async (req, res) => {
  try {
    const Restaurants= await Restaurantes.findAll({
    });
    res.json(Restaurants);
  } catch (error) {
    res.send(error);
  }
});

server.post("/addrestaurants", async (req, res) => {
  
  try {
    const {nombre, direccion, area_de_reparto, actividad, estatus } = req.body;
    const restaurante = await Restaurantes.findOrCreate({
      where: {nombre:nombre},
      defaults: {
        direccion,
        area_de_reparto,
        actividad,
        estatus
      }
    });
    const Corporativo = await Corporativo.findOrCreate({})
    res.json(restaurante);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  index: server,
};