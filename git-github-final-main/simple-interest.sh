#!/bin/bash

# Simple Interest Calculator
# Computes simple interest based on user-provided principal,
# rate of interest, and time period.

echo "----- Simple Interest Calculator -----"

read -p "Enter Principal Amount: " principal
read -p "Enter Rate of Interest: " rate
read -p "Enter Time Period (in years): " time

# Simple Interest = (Principal * Rate * Time) / 100
simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

echo "----------------------------------------"
echo "Principal Amount   : $principal"
echo "Rate of Interest   : $rate"
echo "Time Period        : $time years"
echo "Simple Interest     : $simple_interest"
echo "----------------------------------------"
