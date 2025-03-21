/* eslint-disable camelcase */
// DTO is for get data so that the data issued has a consistent form
const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at,
  updated_at,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
  username,
});

module.exports = { mapDBToModel };
