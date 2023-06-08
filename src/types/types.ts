export enum FileTypeTypeEnum {
  file = 'file',
}

export enum FileTypeFileTypeEnum {
  manuscript = 'manuscript',
}

export enum FileTypeMimeTypeEnum {
  applicationPdf = 'application/pdf',
}

export enum SubmitterTypeTypeEnum {
  type = 'type',
}

export enum ManuscriptTypeType {
  type = 'type',
}

export enum ManuscriptTypeStatus {
  submitted = 'submitted',
}

export enum ManuscriptTypeObjectTypeType {
  test = 'test',
}

export type FileType = {
  type: FileTypeTypeEnum;
  id: string;
  created: string;
  updated: string;
  label: string | null;
  fileType: FileTypeFileTypeEnum;
  filename: string;
  url: string;
  mimeType: FileTypeMimeTypeEnum;
  size: number;
  manuscriptId: string;
  reviewCommentId: string | null;
};

export type SubmitterType = {
  type: SubmitterTypeTypeEnum;
  id: string;
  created: string;
  updated: string;
  admin: boolean;
  email: string;
  username: string;
  teams: string | null;
  passwordResetToken: string | null;
  passwordResetTimestamp: string | null;
  profilePicture: string | null;
  online: string | null;
};

export type ManuscriptTypeNotesType = {
  content: string;
  notesType: string;
};

export type ManuscriptTypeSubmissionType = {
  name: string;
  title: string;
  abstract: string;
  subjects: string[];
  objectType: string | undefined;
};

type MetaManuscriptType = {
  tag?: string;
  title?: string;
  notes?: ManuscriptTypeNotesType[];
  source?: string;
};

export type ManuscriptType = {
  type: ManuscriptTypeType;
  id: string;
  created: string;
  updated: string;
  parentId: string | null;
  submitterId: string;
  status: ManuscriptTypeStatus;
  decision: string | null;
  authors: string[] | null;
  suggestions: string[] | null;
  submission: ManuscriptTypeSubmissionType;
  published: string;
  evaluationsHypothesisMap: string | null;
  isImported: boolean | null;
  importSource: string | null;
  importSourceServer: string | null;
  shortId: number;
  submittedDate: string;
  isHidden: boolean | null;
  reviews: string[];
  submitter: SubmitterType;
  files: FileType[];
  meta: MetaManuscriptType;
};

export type UserType = {
  id: string;
  name: string;
};

export type SelectorItemType = {
  id: string;
  value: string;
  label: string;
};

export type ArticleCategoryType = SelectorItemType & {
  count?: string;
};

export enum SortDirectionEnum {
  desc = 'desc',
  asc = 'asc',
}
export type SortDirectionType = SortDirectionEnum | undefined;

export type EditorType = {
  name: {
    en: string | undefined;
    ru: string | undefined;
  };
  position: {
    en: string | undefined;
    ru: string | undefined;
  };
  degree: {
    en: string | undefined;
    ru: string | undefined;
  };
  organization: {
    en: string | undefined;
    ru: string | undefined;
  };
  image: string | undefined;
};
