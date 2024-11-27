import { User } from '../../models/UserSchema.js'

export const UserService = {
  internalFields: ['-_internal', '-_tags', '-__v'],

  get: (id) => User.findById(id).select(UserService.internalFields),

  create: (data) => User.create(data),

  update: async (id, data) => {
    try {
      if (data.name) {
        Object.entries(data.name).forEach(([key, value]) => {
          data[`name.${key}`] = value
        })
      }

      return await User.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      ).select(UserService.internalFields)
    } catch (err) {
      throw new Error(err)
    }
  },

  delete: (id) => User.findByIdAndDelete(id)
}
