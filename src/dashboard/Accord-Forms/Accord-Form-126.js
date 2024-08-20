import React, { useState } from 'react';
import './accord-126-form.css';

const AccordForm126 = () => {
  const [formData, setFormData] = useState({
    agency: '',
    carrier: '',
    naic_code: '',
    policy_number: '',
    effective_date: '',
    applicant: '',
    claims_made: false,
    occurrence: false,
    general_aggregate: '',
    limit_applies: '',
    products_aggregate: '',
    personal_injury: '',
    each_occurrence: '',
    damage_rented: '',
    medical_expense: '',
    employee_benefits: '',
    property_damage: '',
    per_claim: false,
    per_occurrence: false,
    bodily_injury: '',
    per_claim_bi: false,
    per_occurrence_bi: false,
    other_coverages: '',
    um_uim_coverage: false,
    um_uim_not_available: false,
    medical_payments_coverage: false,
    medical_payments_not_available: false,
    // Add more state variables as needed
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Accord 126 General Liability Form</h1>
      
      <fieldset>
        <legend>Commercial General Liability Section</legend>
        <table>
          <tr>
            <td>Agency</td>
            <td><input type="text" name="agency" value={formData.agency} onChange={handleChange} /></td>
            <td>Carrier</td>
            <td><input type="text" name="carrier" value={formData.carrier} onChange={handleChange} /></td>
            <td>NAIC Code</td>
            <td><input type="text" name="naic_code" value={formData.naic_code} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Policy Number</td>
            <td><input type="text" name="policy_number" value={formData.policy_number} onChange={handleChange} /></td>
            <td>Effective Date</td>
            <td><input type="date" name="effective_date" value={formData.effective_date} onChange={handleChange} /></td>
            <td>Applicant/First Named Insured</td>
            <td><input type="text" name="applicant" value={formData.applicant} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td colSpan="6" className="important-note">
              IMPORTANT - If CLAIMS MADE is checked in the COVERAGE/LIMITS section below, this is an application for a claims-made policy. Read all provisions of the policy carefully.
            </td>
          </tr>
        </table>

        <fieldset>
          <legend>Coverages</legend>
          <table>
            <tr>
              <td>Commercial General Liability</td>
              <td>
                <input type="checkbox" name="claims_made" checked={formData.claims_made} onChange={handleChange} /> Claims Made
                <input type="checkbox" name="occurrence" checked={formData.occurrence} onChange={handleChange} /> Occurrence
              </td>
              <td>Owner's & Contractor's Protective</td>
            </tr>
          </table>
        </fieldset>

        <fieldset>
          <legend>Limits</legend>
          <table>
            <tr>
              <td>General Aggregate</td>
              <td><input type="text" name="general_aggregate" value={formData.general_aggregate} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Limit Applies Per:</td>
              <td>
                <input type="radio" name="limit_applies" value="policy" checked={formData.limit_applies === 'policy'} onChange={handleChange} /> Policy
                <input type="radio" name="limit_applies" value="project" checked={formData.limit_applies === 'project'} onChange={handleChange} /> Project
                <input type="radio" name="limit_applies" value="location" checked={formData.limit_applies === 'location'} onChange={handleChange} /> Location
                <input type="radio" name="limit_applies" value="other" checked={formData.limit_applies === 'other'} onChange={handleChange} /> Other
              </td>
            </tr>
            <tr>
              <td>Products & Completed Operations Aggregate</td>
              <td><input type="text" name="products_aggregate" value={formData.products_aggregate} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Personal & Advertising Injury</td>
              <td><input type="text" name="personal_injury" value={formData.personal_injury} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Each Occurrence</td>
              <td><input type="text" name="each_occurrence" value={formData.each_occurrence} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Damage to Rented Premises (each occurrence)</td>
              <td><input type="text" name="damage_rented" value={formData.damage_rented} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Medical Expense (Any one person)</td>
              <td><input type="text" name="medical_expense" value={formData.medical_expense} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Employee Benefits</td>
              <td><input type="text" name="employee_benefits" value={formData.employee_benefits} onChange={handleChange} /></td>
            </tr>
          </table>
        </fieldset>

        <fieldset>
          <legend>Deductibles</legend>
          <table>
            <tr>
              <td>Property Damage</td>
              <td><input type="text" name="property_damage" value={formData.property_damage} onChange={handleChange} /></td>
              <td>Per Claim</td>
              <td><input type="checkbox" name="per_claim" checked={formData.per_claim} onChange={handleChange} /></td>
              <td>Per Occurrence</td>
              <td><input type="checkbox" name="per_occurrence" checked={formData.per_occurrence} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Bodily Injury</td>
              <td><input type="text" name="bodily_injury" value={formData.bodily_injury} onChange={handleChange} /></td>
              <td>Per Claim</td>
              <td><input type="checkbox" name="per_claim_bi" checked={formData.per_claim_bi} onChange={handleChange} /></td>
              <td>Per Occurrence</td>
              <td><input type="checkbox" name="per_occurrence_bi" checked={formData.per_occurrence_bi} onChange={handleChange} /></td>
            </tr>
          </table>
        </fieldset>

        <fieldset>
          <legend>Other Coverages</legend>
          <textarea name="other_coverages" rows="4" cols="50" value={formData.other_coverages} onChange={handleChange}></textarea>
        </fieldset>

        <fieldset>
          <legend>Applicable Only in Wisconsin</legend>
          <table>
            <tr>
              <td>UM/UIM Coverage</td>
              <td>
                <input type="checkbox" name="um_uim_coverage" checked={formData.um_uim_coverage} onChange={handleChange} /> Is
                <input type="checkbox" name="um_uim_not_available" checked={formData.um_uim_not_available} onChange={handleChange} /> Is Not Available
              </td>
            </tr>
            <tr>
              <td>Medical Payments Coverage</td>
              <td>
                <input type="checkbox" name="medical_payments_coverage" checked={formData.medical_payments_coverage} onChange={handleChange} /> Is
                <input type="checkbox" name="medical_payments_not_available" checked={formData.medical_payments_not_available} onChange={handleChange} /> Is Not Available
              </td>
            </tr>
          </table>
        </fieldset>
      </fieldset>

      <fieldset>
        <legend>Schedule of Hazards</legend>
        <table>
          <thead>
            <tr>
              <th>LOC #</th>
              <th>HAZ #</th>
              <th>CLASS CODE</th>
              <th>PREMIUM BASIS</th>
              <th>EXPOSURE</th>
              <th>TERR</th>
              <th>RATE</th>
              <th>PREMIUM</th>
              <th>PREM/OPS</th>
              <th>PRODUCTS</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Hazard Rows */}
            <tr>
              <td><input type="text" name="loc_1" onChange={handleChange} /></td>
              <td><input type="text" name="haz_1" onChange={handleChange} /></td>
              <td><input type="text" name="class_code_1" onChange={handleChange} /></td>
              <td><input type="text" name="premium_basis_1" onChange={handleChange} /></td>
              <td><input type="text" name="exposure_1" onChange={handleChange} /></td>
              <td><input type="text" name="terr_1" onChange={handleChange} /></td>
              <td><input type="text" name="rate_1" onChange={handleChange} /></td>
              <td><input type="text" name="premium_1" onChange={handleChange} /></td>
              <td><input type="text" name="prem_ops_1" onChange={handleChange} /></td>
              <td><input type="text" name="products_1" onChange={handleChange} /></td>
            </tr>
            <tr>
              <td colSpan="10" className="classification-description">
                <textarea name="classification_description_1" rows="2" cols="50" onChange={handleChange} placeholder="Write Classification Description"></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <fieldset>
          <legend>Rating and Premium Basis</legend>
          <table>
            <tr>
              <td>(P) Payroll - Per $1,000/PAY</td>
              <td>(C) Total Cost - Per $1,000/COST</td>
              <td>(U) Unit - Per Unit</td>
            </tr>
            <tr>
              <td>(S) Gross Sales - Per $1,000/SALES</td>
              <td>(A) Area - Per 1,000/SQ FT</td>
              <td>(M) Admissions - Per 1,000/ADM)</td>
              <td>(T) Other</td>
            </tr>
          </table>
        </fieldset>
      </fieldset>

      {/* Additional fields can be added below following the same structure */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AccordForm126;
