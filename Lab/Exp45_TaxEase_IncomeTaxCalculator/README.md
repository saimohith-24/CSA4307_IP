# TaxEase - Employee Income Tax & Deduction Calculator

## Aim
To design an employee income tax calculation portal ('TaxEase') computing Net Taxable Income after HRA, Standard Deduction (₹50,000), Pension cap (₹1,50,000), and Health Insurance, and applying progressive tax slabs.

## Procedure
1. Implement the exact Net Taxable Income formula: (Gross Monthly × 12) - (HRA × 12) - ₹50,000 - min(Pension × 12, ₹1,50,000) - (Health Insurance × 12).
2. Apply the slab rules (Tax = 0 if Net Taxable Income ≤ ₹5,00,000; else 5% on 2.5L–5L, 20% on 5L–10L, 30% above 10L) and generate a downloadable tax summary.

## How to Run
Open `index.html` directly in any web browser.
