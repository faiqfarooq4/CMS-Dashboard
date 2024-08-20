import React, { useState } from 'react';
import './accord-140-form.css';

const AccordForm140 = () => {
  const [formData, setFormData] = useState({
    agency_name: '',
    carrier: '',
    naic_code: '',
    policy_number: '',
    effective_date: '',
    named_insureds: '',
    premises_number: '',
    street_address: '',
    building_number: '',
    building_description: '',
    subject_insurance_1: '',
    amount_1: '',
    coins_1: '',
    valuation_1: '',
    causes_loss_1: '',
    inflation_guard_1: '',
    ded_1: '',
    blkt_1: '',
    forms_conditions_1: '',
    subject_insurance_2: '',
    amount_2: '',
    coins_2: '',
    valuation_2: '',
    causes_loss_2: '',
    inflation_guard_2: '',
    ded_2: '',
    blkt_2: '',
    forms_conditions_2: '',
    spoilage_coverage: false,
    property_description: '',
    limit: '',
    deductible: '',
    refrigeration_maintenance: false,
    option_breakdown: false,
    option_power_outage: false,
    option_selling_price: false,
    sinkhole_coverage_accept: false,
    sinkhole_coverage_reject: false,
    sinkhole_limit: '',
    open_sides: '',
    construction_type: '',
    distance_hydrant: '',
    distance_hydrant_mi: '',
    fire_district: '',
    code_number: '',
    prot_cl: '',
    stories: '',
    bsmts: '',
    yr_built: '',
    total_area: '',
    wiring_year: '',
    plumbing_year: '',
    roofing_year: '',
    heating_year: '',
    other_improvements: '',
    bldg_code_grade: '',
    tax_code: '',
    roof_type: '',
    other_occupancies: '',
    wind_class: '',
    semi_resistive: '',
    heating_source: '',
    date_installed: '',
    manufacturer: '',
    primary_heat: '',
    boiler_primary: false,
    solid_fuel_primary: false,
    boiler_insurance_elsewhere_primary: false,
    secondary_heat: '',
    boiler_secondary: false,
    solid_fuel_secondary: false,
    boiler_insurance_elsewhere_secondary: false,
    right_exposure_distance: '',
    left_exposure_distance: '',
    front_exposure_distance: '',
    rear_exposure_distance: '',
    burglar_alarm_type: '',
    certificate_number: '',
    expiration_date: '',
    alarm_installed_by: '',
    extent: '',
    grade: '',
    guards_watchmen: '',
    with_keys: false,
    clock_hourly: false,
    premises_fire_protection: '',
    percent_sprink: '',
    fire_alarm_manufacturer: '',
    loss_payee: false,
    mortgagee: false,
    name_and_address: '',
    rank: '',
    evidence: false,
    certificate: false,
    location: '',
    building: '',
    item: '',
    class: '',
    item_description: '',
    reference_loan: '',
    remarks: '',
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
      <h1>Accord-140 Property Insurance Form</h1>
      
      <fieldset>
        <legend>Property Section</legend>
        <table>
          <tr>
            <td>Agency Name</td>
            <td><input type="text" name="agency_name" value={formData.agency_name} onChange={handleChange} /></td>
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
            <td>Named Insured(s)</td>
            <td><input type="text" name="named_insureds" value={formData.named_insureds} onChange={handleChange} /></td>
          </tr>
        </table>
      </fieldset>

      <fieldset>
        <legend>Premises Information</legend>
        <table>
          <tr>
            <td>Premises #</td>
            <td><input type="text" name="premises_number" value={formData.premises_number} onChange={handleChange} /></td>
            <td>Street Address</td>
            <td colspan="3"><input type="text" name="street_address" value={formData.street_address} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Building #</td>
            <td><input type="text" name="building_number" value={formData.building_number} onChange={handleChange} /></td>
            <td>Building Description</td>
            <td colspan="3"><input type="text" name="building_description" value={formData.building_description} onChange={handleChange} /></td>
          </tr>
        </table>

        <table>
          <thead>
            <tr>
              <th>Subject of Insurance</th>
              <th>Amount</th>
              <th>Coins %</th>
              <th>Valuation</th>
              <th>Causes of Loss</th>
              <th>Inflation Guard %</th>
              <th>Ded</th>
              <th>Blkt</th>
              <th>Forms and Conditions to Apply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" name="subject_insurance_1" value={formData.subject_insurance_1} onChange={handleChange} /></td>
              <td><input type="text" name="amount_1" value={formData.amount_1} onChange={handleChange} /></td>
              <td><input type="text" name="coins_1" value={formData.coins_1} onChange={handleChange} /></td>
              <td><input type="text" name="valuation_1" value={formData.valuation_1} onChange={handleChange} /></td>
              <td><input type="text" name="causes_loss_1" value={formData.causes_loss_1} onChange={handleChange} /></td>
              <td><input type="text" name="inflation_guard_1" value={formData.inflation_guard_1} onChange={handleChange} /></td>
              <td><input type="text" name="ded_1" value={formData.ded_1} onChange={handleChange} /></td>
              <td><input type="text" name="blkt_1" value={formData.blkt_1} onChange={handleChange} /></td>
              <td><input type="text" name="forms_conditions_1" value={formData.forms_conditions_1} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><input type="text" name="subject_insurance_2" value={formData.subject_insurance_2} onChange={handleChange} /></td>
              <td><input type="text" name="amount_2" value={formData.amount_2} onChange={handleChange} /></td>
              <td><input type="text" name="coins_2" value={formData.coins_2} onChange={handleChange} /></td>
              <td><input type="text" name="valuation_2" value={formData.valuation_2} onChange={handleChange} /></td>
              <td><input type="text" name="causes_loss_2" value={formData.causes_loss_2} onChange={handleChange} /></td>
              <td><input type="text" name="inflation_guard_2" value={formData.inflation_guard_2} onChange={handleChange} /></td>
              <td><input type="text" name="ded_2" value={formData.ded_2} onChange={handleChange} /></td>
              <td><input type="text" name="blkt_2" value={formData.blkt_2} onChange={handleChange} /></td>
              <td><input type="text" name="forms_conditions_2" value={formData.forms_conditions_2} onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
        <div>Additional Information</div>
        <div>Business Income / Extra Expense - Attach ACORD 810</div>
        <div>Value Reporting Information - Attach ACORD 811</div>
      </fieldset>

      <fieldset>
        <legend>Additional Coverages, Options, Restrictions, Endorsements and Rating Information</legend>
        <table>
          <tr>
            <td>Spoilage Coverage (Y/N)</td>
            <td><input type="checkbox" name="spoilage_coverage" checked={formData.spoilage_coverage} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Description of Property Covered</td>
            <td colspan="3"><textarea name="property_description" rows="2" value={formData.property_description} onChange={handleChange}></textarea></td>
          </tr>
          <tr>
            <td>Limit</td>
            <td><input type="text" name="limit" value={formData.limit} onChange={handleChange} /></td>
            <td>Deductible</td>
            <td><input type="text" name="deductible" value={formData.deductible} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Refrigeration Maintenance Agreement (Y/N)</td>
            <td><input type="checkbox" name="refrigeration_maintenance" checked={formData.refrigeration_maintenance} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Options</td>
            <td colspan="3">
              <input type="checkbox" name="option_breakdown" checked={formData.option_breakdown} onChange={handleChange} /> Breakdown or Contamination<br />
              <input type="checkbox" name="option_power_outage" checked={formData.option_power_outage} onChange={handleChange} /> Power Outage<br />
              <input type="checkbox" name="option_selling_price" checked={formData.option_selling_price} onChange={handleChange} /> Selling Price
            </td>
          </tr>
          <tr>
            <td>Sinkhole Coverage (Required in Florida)</td>
            <td><input type="checkbox" name="sinkhole_coverage_accept" checked={formData.sinkhole_coverage_accept} onChange={handleChange} /> Accept Coverage</td>
            <td><input type="checkbox" name="sinkhole_coverage_reject" checked={formData.sinkhole_coverage_reject} onChange={handleChange} /> Reject Coverage</td>
            <td>Limit: $<input type="text" name="sinkhole_limit" value={formData.sinkhole_limit} onChange={handleChange} /></td>
            <td># of Open Sides on Structure:</td>
            <td><input type="text" name="open_sides" value={formData.open_sides} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td colspan="6">Property has been designated an historical landmark</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Construction Type</td>
            <td><input type="text" name="construction_type" value={formData.construction_type} onChange={handleChange} /></td>
            <td>Distance to Hydrant</td>
            <td><input type="text" name="distance_hydrant" value={formData.distance_hydrant} onChange={handleChange} /> FT</td>
            <td><input type="text" name="distance_hydrant_mi" value={formData.distance_hydrant_mi} onChange={handleChange} /> MI</td>
            <td>Fire District</td>
            <td><input type="text" name="fire_district" value={formData.fire_district} onChange={handleChange} /></td>
            <td>Code Number</td>
            <td><input type="text" name="code_number" value={formData.code_number} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Prot CL</td>
            <td><input type="text" name="prot_cl" value={formData.prot_cl} onChange={handleChange} /></td>
            <td># Stories</td>
            <td><input type="text" name="stories" value={formData.stories} onChange={handleChange} /></td>
            <td># Bsmts</td>
            <td><input type="text" name="bsmts" value={formData.bsmts} onChange={handleChange} /></td>
            <td>Yr Built</td>
            <td><input type="text" name="yr_built" value={formData.yr_built} onChange={handleChange} /></td>
            <td>Total Area</td>
            <td><input type="text" name="total_area" value={formData.total_area} onChange={handleChange} /></td>
          </tr>
        </table>
        <table>
          <thead>
            <tr>
              <th>Building Improvements</th>
              <th>Year</th>
              <th>Building Improvements</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wiring</td>
              <td><input type="text" name="wiring_year" value={formData.wiring_year} onChange={handleChange} /></td>
              <td>Plumbing</td>
              <td><input type="text" name="plumbing_year" value={formData.plumbing_year} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Roofing</td>
              <td><input type="text" name="roofing_year" value={formData.roofing_year} onChange={handleChange} /></td>
              <td>Heating</td>
              <td><input type="text" name="heating_year" value={formData.heating_year} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Other</td>
              <td colspan="3"><input type="text" name="other_improvements" value={formData.other_improvements} onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tr>
            <td>Bldg Code Grade</td>
            <td><input type="text" name="bldg_code_grade" value={formData.bldg_code_grade} onChange={handleChange} /></td>
            <td>Tax Code</td>
            <td><input type="text" name="tax_code" value={formData.tax_code} onChange={handleChange} /></td>
            <td>Roof Type</td>
            <td><input type="text" name="roof_type" value={formData.roof_type} onChange={handleChange} /></td>
            <td>Other Occupancies</td>
            <td><input type="text" name="other_occupancies" value={formData.other_occupancies} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Wind Class</td>
            <td><input type="text" name="wind_class" value={formData.wind_class} onChange={handleChange} /></td>
            <td>Semi-Resistive</td>
            <td><input type="text" name="semi_resistive" value={formData.semi_resistive} onChange={handleChange} /></td>
            <td>Heating Source Incl. Woodburning Stove or Fireplace Insert</td>
            <td><input type="text" name="heating_source" value={formData.heating_source} onChange={handleChange} /></td>
            <td>Date Installed</td>
            <td><input type="date" name="date_installed" value={formData.date_installed} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Manufacturer</td>
            <td colspan="3"><input type="text" name="manufacturer" value={formData.manufacturer} onChange={handleChange} /></td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Primary Heat</td>
            <td><input type="text" name="primary_heat" value={formData.primary_heat} onChange={handleChange} /></td>
            <td>Boiler</td>
            <td><input type="checkbox" name="boiler_primary" checked={formData.boiler_primary} onChange={handleChange} /></td>
            <td>Solid Fuel</td>
            <td><input type="checkbox" name="solid_fuel_primary" checked={formData.solid_fuel_primary} onChange={handleChange} /></td>
            <td>If Boiler, is Insurance Placed Elsewhere?</td>
            <td><input type="checkbox" name="boiler_insurance_elsewhere_primary" checked={formData.boiler_insurance_elsewhere_primary} onChange={handleChange} /> Y/N</td>
          </tr>
          <tr>
            <td>Secondary Heat</td>
            <td><input type="text" name="secondary_heat" value={formData.secondary_heat} onChange={handleChange} /></td>
            <td>Boiler</td>
            <td><input type="checkbox" name="boiler_secondary" checked={formData.boiler_secondary} onChange={handleChange} /></td>
            <td>Solid Fuel</td>
            <td><input type="checkbox" name="solid_fuel_secondary" checked={formData.solid_fuel_secondary} onChange={handleChange} /></td>
            <td>If Boiler, is Insurance Placed Elsewhere?</td>
            <td><input type="checkbox" name="boiler_insurance_elsewhere_secondary" checked={formData.boiler_insurance_elsewhere_secondary} onChange={handleChange} /> Y/N</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Right Exposure & Distance</td>
            <td><input type="text" name="right_exposure_distance" value={formData.right_exposure_distance} onChange={handleChange} /></td>
            <td>Left Exposure & Distance</td>
            <td><input type="text" name="left_exposure_distance" value={formData.left_exposure_distance} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Front Exposure & Distance</td>
            <td><input type="text" name="front_exposure_distance" value={formData.front_exposure_distance} onChange={handleChange} /></td>
            <td>Rear Exposure & Distance</td>
            <td><input type="text" name="rear_exposure_distance" value={formData.rear_exposure_distance} onChange={handleChange} /></td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Burglar Alarm Type</td>
            <td><input type="text" name="burglar_alarm_type" value={formData.burglar_alarm_type} onChange={handleChange} /></td>
            <td>Certificate #</td>
            <td><input type="text" name="certificate_number" value={formData.certificate_number} onChange={handleChange} /></td>
            <td>Expiration Date</td>
            <td><input type="date" name="expiration_date" value={formData.expiration_date} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Burglar Alarm Installed and Serviced By</td>
            <td><input type="text" name="alarm_installed_by" value={formData.alarm_installed_by} onChange={handleChange} /></td>
            <td>Extent</td>
            <td><input type="text" name="extent" value={formData.extent} onChange={handleChange} /></td>
            <td>Grade</td>
            <td><input type="text" name="grade" value={formData.grade} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td># Guards / Watchmen</td>
            <td><input type="text" name="guards_watchmen" value={formData.guards_watchmen} onChange={handleChange} /></td>
            <td>With Keys</td>
            <td><input type="checkbox" name="with_keys" checked={formData.with_keys} onChange={handleChange} /></td>
            <td>Clock Hourly</td>
            <td><input type="checkbox" name="clock_hourly" checked={formData.clock_hourly} onChange={handleChange} /></td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Premises Fire Protection (Sprinklers, Standpipes, CO2 / Chemical Systems)</td>
            <td><input type="text" name="premises_fire_protection" value={formData.premises_fire_protection} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>% Sprink</td>
            <td><input type="text" name="percent_sprink" value={formData.percent_sprink} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Fire Alarm Manufacturer</td>
            <td><input type="text" name="fire_alarm_manufacturer" value={formData.fire_alarm_manufacturer} onChange={handleChange} /></td>
          </tr>
        </table>
      </fieldset>

      <fieldset>
        <legend>Additional Interest</legend>
        <table>
          <thead>
            <tr>
              <th>Interest</th>
              <th>Name and Address</th>
              <th>Rank</th>
              <th>Evidence</th>
              <th>Certificate</th>
              <th>Interest in Item Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="loss_payee" checked={formData.loss_payee} onChange={handleChange} /> Loss Payee<br />
                <input type="checkbox" name="mortgagee" checked={formData.mortgagee} onChange={handleChange} /> Mortgagee
              </td>
              <td><textarea name="name_and_address" rows="3" value={formData.name_and_address} onChange={handleChange}></textarea></td>
              <td><input type="text" name="rank" value={formData.rank} onChange={handleChange} /></td>
              <td><input type="checkbox" name="evidence" checked={formData.evidence} onChange={handleChange} /></td>
              <td><input type="checkbox" name="certificate" checked={formData.certificate} onChange={handleChange} /></td>
              <td>
                Location: <input type="text" name="location" value={formData.location} onChange={handleChange} /><br />
                Building: <input type="text" name="building" value={formData.building} onChange={handleChange} /><br />
                Item: <input type="text" name="item" value={formData.item} onChange={handleChange} /><br />
                Class: <input type="text" name="class" value={formData.class} onChange={handleChange} /><br />
                Item Description: <input type="text" name="item_description" value={formData.item_description} onChange={handleChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <div>Reference / Loan #: <input type="text" name="reference_loan" value={formData.reference_loan} onChange={handleChange} /></div>
      </fieldset>

      <fieldset>
        <legend>Remarks</legend>
        <textarea name="remarks" rows="4" cols="50" value={formData.remarks} onChange={handleChange}></textarea>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AccordForm140;
