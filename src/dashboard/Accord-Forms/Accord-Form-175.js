import React, { useState } from 'react';

const AccordForm175 = () => {
  const [formData, setFormData] = useState({
    agency: '',
    carrier: '',
    contactName: '',
    attention: '',
    phone: '',
    fax: '',
    email: '',
    policyNumber: '',
    accountNumber: '',
    effectiveDate: '',
    inceptionDate: '',
    expirationDate: '',
    policyType: {
      property: false,
      inlandMarine: false,
      umbrella: false,
      generalLiability: false,
      auto: false,
      truckers: false,
      motorCarriers: false,
      businessOwners: false,
      workersComp: false,
    },
    remarks: '',
    premisesInfo: [
      {
        loc: '',
        bld: '',
        address: '',
        cityLimits: 'inside',
        interest: 'owner',
        yrBuilt: '',
        partOccupied: '',
        add: false,
        change: false,
        delete: false,
      },
    ],
    operationsInfo: [
      {
        loc: '',
        bld: '',
        description: '',
        add: false,
        change: false,
        delete: false,
      },
    ],
    vehicleInfo: [
      {
        veh: '',
        year: '',
        make: '',
        model: '',
        bodyType: '',
        vin: '',
        garagingAddress: '',
        county: '',
        state: '',
        zip: '',
        licState: '',
        terr: '',
        gvw: '',
        class: '',
        sic: '',
        factor: '',
        seatCp: '',
        radius: '',
        farthestTerminal: '',
        costNew: '',
        use: 'pleasure',
        addlNoFault: false,
        medicalPayments: '',
        uninsuredMotorists: '',
        underinsuredMotorists: '',
        vehicleType: '',
        symAge: '',
        compOtc: '',
        specColl: '',
        totalPrem: '',
      },
    ],
    driverInfo: [
      {
        driver: '',
        driverName: '',
        driverCity: '',
        driverSex: '',
        driverDob: '',
        driverExp: '',
        driverLicense: '',
        driverSsn: '',
        driverStateLic: '',
        driverHire: '',
        driverUse: '',
      },
    ],
    workersComp: [
      {
        typeChange: '',
        state: '',
        loc: '',
        classCode: '',
        descrCode: '',
        categories: '',
        employeesFull: '',
        employeesPart: '',
        annualRemuneration: '',
      },
    ],
    propertyInlandMarine: [
      {
        premises: '',
        building: '',
        add: false,
        change: false,
        delete: false,
        subjectInsurance: '',
        amount: '',
        coins: '',
        valuation: '',
        causesLoss: '',
        inflationGuard: '',
        deductible: '',
        formsConditions: '',
        constructionType: '',
        distanceHydrant: '',
        fireDistrict: '',
        protCl: '',
        stories: '',
        basmts: '',
        yrBuilt: '',
        totalArea: '',
        buildingImprovements: '',
        plumbingYr: '',
        heatingYr: '',
        wiringYr: '',
        roofingYr: '',
        other: '',
        rightExposure: '',
        leftExposure: '',
        rearExposure: '',
        burglarAlarmType: '',
        certificate: '',
        expirationDate: '',
        extent: '',
        grade: '',
        burglarAlarmInstalled: '',
        guards: '',
        fireProtection: '',
        fireAlarmManufacturer: '',
        fireAlarmType: '',
      },
    ],
    inlandMarineScheduled: [
      {
        modelYear: '',
        description: '',
        serial: '',
        datePurchased: '',
        newUsed: 'new',
        amountInsurance: '',
      },
    ],
    scheduleOfHazards: [
      {
        typeChange: '',
        loc: '',
        haz: '',
        classification: '',
        classCode: '',
        premiumBasis: '',
        exposure: '',
        terr: '',
      },
    ],
    umbrella: {
      limitLiability: '',
      retainedLimit: '',
      otherDescribe: '',
    },
    additionalInterest: [
      {
        interest: 'additional-insured',
        nameAddress: '',
        rank: '',
        evidence: '',
        certificate: '',
        add: false,
        change: false,
        delete: false,
        location: '',
        building: '',
        boat: '',
        airport: '',
        itemClass: '',
        item: '',
        itemDescription: '',
      },
    ],
    signature: {
      producersSignature: '',
      producersName: '',
      stateProducerLicenseNo: '',
      insuredSignature: '',
      date: '',
      nationalProducerNumber: '',
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    setFormData((prevData) => ({
      ...prevData,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const handleArrayChange = (index, arrayName, field, value) => {
    const newArray = [...formData[arrayName]];
    newArray[index] = {
      ...newArray[index],
      [field]: value,
    };
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: newArray,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Accord-175 Policy Change Request Form</h1>
      <fieldset>
        <legend>COMMERCIAL POLICY CHANGE REQUEST</legend>

        <div className="form-section">
          <div className="half-width">
            <label>AGENCY</label>
            <input type="text" name="agency" value={formData.agency} onChange={handleChange} />
          </div>
          <div className="half-width">
            <label>CARRIER</label>
            <input type="text" name="carrier" value={formData.carrier} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <div className="half-width">
            <label>CONTACT NAME</label>
            <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} />
          </div>
          <div className="half-width">
            <label>ATTENTION</label>
            <input type="text" name="attention" value={formData.attention} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <div className="third-width">
            <label>PHONE</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="third-width">
            <label>FAX</label>
            <input type="text" name="fax" value={formData.fax} onChange={handleChange} />
          </div>
          <div className="third-width">
            <label>EMAIL</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <div className="half-width">
            <label>POLICY NUMBER</label>
            <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
          </div>
          <div className="half-width">
            <label>ACCOUNT NUMBER</label>
            <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <div className="third-width">
            <label>EFFECTIVE DATE OF CHANGE</label>
            <input type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleChange} />
          </div>
          <div className="third-width">
            <label>POLICY INCEPTION DATE</label>
            <input type="date" name="inceptionDate" value={formData.inceptionDate} onChange={handleChange} />
          </div>
          <div className="third-width">
            <label>POLICY EXPIRATION DATE</label>
            <input type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <label>POLICY TYPE</label>
          <div className="checkbox-group">
            {Object.keys(formData.policyType).map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  name={`policyType.${type}`}
                  checked={formData.policyType[type]}
                  onChange={(e) => {
                    const updatedPolicyType = { ...formData.policyType, [type]: e.target.checked };
                    setFormData((prevData) => ({
                      ...prevData,
                      policyType: updatedPolicyType,
                    }));
                  }}
                />
                {type.replace(/-/g, ' ')}
              </label>
            ))}
          </div>
        </div>
        <div className="form-section">
          <label>SHORT DESCRIPTION OF CHANGES / REMARKS</label>
          <textarea name="remarks" rows="4" value={formData.remarks} onChange={handleChange}></textarea>
        </div>

        {/* Premises Information Section */}
        {formData.premisesInfo.map((premise, index) => (
          <div key={index} className="form-section">
            <label>PREMISES INFORMATION</label>
            <table>
              <thead>
                <tr>
                  <th>LOC #</th>
                  <th>BLD #</th>
                  <th>STREET, CITY, COUNTY, STATE, ZIP+4</th>
                  <th>CITY LIMITS</th>
                  <th>INTEREST</th>
                  <th>YR BUILT</th>
                  <th>PART OCCUPIED</th>
                  <th>ADD</th>
                  <th>CHANGE</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="loc"
                      value={premise.loc}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'loc', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="bld"
                      value={premise.bld}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'bld', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      value={premise.address}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'address', e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      name="cityLimits"
                      value={premise.cityLimits}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'cityLimits', e.target.value)}
                    >
                      <option value="inside">Inside</option>
                      <option value="outside">Outside</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="interest"
                      value={premise.interest}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'interest', e.target.value)}
                    >
                      <option value="owner">Owner</option>
                      <option value="tenant">Tenant</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="yrBuilt"
                      value={premise.yrBuilt}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'yrBuilt', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="partOccupied"
                      value={premise.partOccupied}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'partOccupied', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="add"
                      checked={premise.add}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'add', e.target.checked)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="change"
                      checked={premise.change}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'change', e.target.checked)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="delete"
                      checked={premise.delete}
                      onChange={(e) => handleArrayChange(index, 'premisesInfo', 'delete', e.target.checked)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

        {/* Other sections can be added similarly following the same pattern as the premisesInfo */}

        <fieldset>
          <legend>SIGNATURE (Any deletion or reduction in coverage requires the Insured's signature)</legend>
          <div className="form-section">
            <label>PRODUCER'S SIGNATURE</label>
            <input
              type="text"
              name="producersSignature"
              value={formData.signature.producersSignature}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  signature: {
                    ...prevData.signature,
                    producersSignature: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="form-section">
            <label>PRODUCER'S NAME (Please Print)</label>
            <input
              type="text"
              name="producersName"
              value={formData.signature.producersName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  signature: {
                    ...prevData.signature,
                    producersName: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="form-section">
            <label>STATE PRODUCER LICENSE NO (Required in Florida)</label>
            <input
              type="text"
              name="stateProducerLicenseNo"
              value={formData.signature.stateProducerLicenseNo}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  signature: {
                    ...prevData.signature,
                    stateProducerLicenseNo: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="form-section">
            <label>INSURED'S SIGNATURE</label>
            <input
              type="text"
              name="insuredSignature"
              value={formData.signature.insuredSignature}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  signature: {
                    ...prevData.signature,
                    insuredSignature: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="form-section">
            <label>DATE</label>
            <input
              type="date"
              name="date"
              value={formData.signature.date}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  signature: {
                    ...prevData.signature,
                    date: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="form-section">
            <label>NATIONAL PRODUCER NUMBER</label>
            <input
              type="text"
              name="nationalProducerNumber"
              value={formData.signature.nationalProducerNumber}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  signature: {
                    ...prevData.signature,
                    nationalProducerNumber: e.target.value,
                  },
                }))
              }
            />
          </div>
        </fieldset>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default AccordForm175;
