export const SCHOOL_OPTIONS = [
  { name: "School of Computer Science & Applications", code: "SoCSEA", group: "engineering" },
  { name: "School of Bio-Engineering & Bio Science", code: "SoBB", group: "engineering" },
  { name: "School of Continual Education", code: "SoCE", group: "engineering" },
  { name: "School of Engineering, Management & Research", code: "SoEMR", group: "engineering" },
  { name: "School of Commerce & Management", code: "SoCM", group: "nonEngineering" },
  { name: "School of Media & Communication Studies", code: "SoMCS", group: "nonEngineering" },
  { name: "School of Design", code: "SoD", group: "nonEngineering" },
  { name: "School of Applied Arts", code: "SoAA", group: "nonEngineering" },
];

const normalizeSchoolValue = (value = "") =>
  String(value).trim().toLowerCase().replace(/[^a-z0-9]/g, "");

export const canonicalSchoolCode = (value = "") => {
  const normalized = normalizeSchoolValue(value);
  const school = SCHOOL_OPTIONS.find((option) =>
    normalizeSchoolValue(option.code) === normalized ||
    normalizeSchoolValue(option.name) === normalized
  );

  return school?.code.toUpperCase() || "";
};

export const schoolGroupFor = (value = "") => {
  const normalized = normalizeSchoolValue(value);
  const school = SCHOOL_OPTIONS.find((option) =>
    normalizeSchoolValue(option.code) === normalized ||
    normalizeSchoolValue(option.name) === normalized
  );

  return school?.group || "";
};

export const ADMINISTRATIVE_POSTS = [
  { value: "registrar", label: "Registrar" },
  { value: "hr", label: "HR" },
  { value: "dean-student-welfare", label: "Dean Student Welfare" },
  { value: "dean-placement", label: "Dean Placement" },
];
