interface INote {
  title: String;
  content?: String;
  is_archived: Boolean;
  created_at?: Date;
  category: String;
}

export default INote;
