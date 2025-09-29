"use server";
import fs from "fs/promises";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "contact-submissions.json");

export async function saveContactData(formData) {
  try {
    let entry;
    if (formData instanceof FormData) {
      entry = {
        name: formData.get("name") || "",
        company: formData.get("company") || "",
        email: formData.get("email") || "",
        description: formData.get("description") || "",
        createdAt: new Date().toISOString(),
      };
    } else {
      entry = {
        ...formData,
        createdAt: new Date().toISOString(),
      };
    }

    let existing = [];
    try {
      const raw = await fs.readFile(FILE_PATH, "utf8");
      existing = JSON.parse(raw || "[]");
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // ignore if file missing
    }

    existing.push(entry);
    await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
    await fs.writeFile(FILE_PATH, JSON.stringify(existing, null, 2), "utf8");
    return { ok: true };
  } catch (err) {
    console.error("Error saving data:", err);
    return { ok: false, error: "Failed to save contact data" };
  }
}
