// Created by: Emma Janani
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates amount of fuel required for a car trip.
 */
function calculatefuel () {
  // get user input
  let tripDistance = parseFloat(document.getElementById('distance').value)
  let fuelEfficiency = parseFloat(document.getElementById('efficiency').value)
  let fuelPrice = parseFloat(document.getElementById('price').value)

  // calculate the amount of fuel needed and fuel cost for a car trip
  let fuel_required = tripDistance/fuelEfficiency
  let fuel_cost = (tripDistance * fuelEfficiency * fuelPrice)/100

  // display the results
  document.getElementById('fuel-required').innerHTML = fuel_required.toFixed(2) + "litres of fuel are required for the trip,"
  document.getElementById('fuel-cost').innerHTML = " so the fuel cost is " + fuel_cost.toFixed(2) + "$"
}