
import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model("Role", RoleSchema);

const TypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Type = mongoose.model("Type", TypeSchema);

const StrainTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const StrainType = mongoose.model("StrainType", StrainTypeSchema);

const ThcTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ThcType = mongoose.model("ThcType", ThcTypeSchema);

const TagsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tags = mongoose.model("Tags", TagsSchema);

const WeightTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const WeightType = mongoose.model("WeightType", WeightTypeSchema);

async function seed() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://johnnsnopkz:78245199g@weedshop.tyv39o7.mongodb.net/blog?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log("DB.ok"))
      .catch((err) => console.log("DB error", err));
    console.log("Connected to the database");

    const roles = [{ name: "user" }, { name: "admin" }];

    for (const role of roles) {
      const existingRole = await Role.findOne({ name: role.name });
      if (!existingRole) {
        const newRole = new Role(role);
        await newRole.save();
        console.log(`Role '${role.name}' created`);
      } else {
        console.log(`Role '${role.name}' already exists`);
      }
    }

    const types = [{ name: "Edible" }, { name: "Flower" }, { name: "Concentrate" }];

    for (const type of types) {
      const existingType = await Type.findOne({ name: type.name });
      if (!existingType) {
        const newType = new Type(type);
        await newType.save();
        console.log(`Type '${type.name}' created`);
      } else {
        console.log(`Type '${type.name}' already exists`);
      }
    }

    const strainTypes = [{ name: "Indica" }, { name: "Sativa" }, { name: "Hybrid" }];

    for (const strainType of strainTypes) {
      const existingStrainType = await StrainType.findOne({ name: strainType.name });
      if (!existingStrainType) {
        const newStrainType = new StrainType(strainType);
        await newStrainType.save();
        console.log(`StrainType '${strainType.name}' created`);
      } else {
        console.log(`StrainType '${strainType.name}' already exists`);
      }
    }

    const thcTypes = [{ name: "Low" }, { name: "Medium" }, { name: "High" }];

    for (const thcType of thcTypes) {
      const existingThcType = await ThcType.findOne({ name: thcType.name });
      if (!existingThcType) {
        const newThcType = new ThcType(thcType);
        await newThcType.save();
        console.log(`ThcType '${thcType.name}' created`);
      } else {
        console.log(`ThcType '${thcType.name}' already exists`);
      }
    }

    const tags = [{ name: "Relaxing" }, { name: "Euphoric" }, { name: "Uplifting" }];

    for (const tag of tags) {
      const existingTag = await Tags.findOne({ name: tag.name });
      if (!existingTag) {
        const newTag = new Tags(tag);
        await newTag.save();
        console.log(`Tag '${tag.name}' created`);
      } else {
        console.log(`Tag '${tag.name}' already exists`);
      }
    }

    const weightTypes = [{ name: "Gram" }, { name: "Eighth" }, { name: "Quarter" }];

    for (const weightType of weightTypes) {
      const existingWeightType = await WeightType.findOne({ name: weightType.name });
      if (!existingWeightType) {
        const newWeightType = new WeightType(weightType);
        await newWeightType.save();
        console.log(`WeightType '${weightType.name}' created`);
      } else {
        console.log(`WeightType '${weightType.name}' already exists`);
      }
    }
    console.log("Seed данных успешно завершен");
  } catch (error) {
    console.error("Ошибка при seed-инге данных:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from the database");
  }
}

seed();
