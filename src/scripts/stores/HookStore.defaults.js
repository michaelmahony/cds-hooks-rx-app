var url = runtime.CDS_HOOKS_URL + "/cds-services/"

export default {
  // [url + "cms-price-check"]: {
  //   enabled: true,
  //   id: url + "cms-price-check",
  //   url: url + "cms-price-check",
  //   name: "CMS Price Check",
  //   hook: "medication-prescribe"
  // },
  // [url + "patient-hello-world"]: {
  //   enabled: true,
  //   id: url + "patient-hello-world",
  //   url: url + "patient-hello-world",
  //   name: "Patient Hello world",
  //   hook: "patient-view",
  //   prefetch: {
  //     "patientToGreet": "Patient/{{Patient.id}}"
  //   }
  // },
  ["http://prime-dimensions-zika.herokuapp.com/cds-services/prime-dimensions-zika"]: {
    enabled: true,
    id: "http://prime-dimensions-zika.herokuapp.com/cds-services/prime-dimensions-zika",
    url: "http://prime-dimensions-zika.herokuapp.com/cds-services/prime-dimensions-zika",
    name: "Patient Hello world",
    hook: "patient-view",
    prefetch: {
      "myPatient": "Patient/{{Patient.id}}"
    }
  }
}
