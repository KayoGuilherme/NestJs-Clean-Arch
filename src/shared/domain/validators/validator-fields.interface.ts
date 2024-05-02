export type FieldErros = {
  [field: string]: string[];
}

export interface ValidatorFieldsInterface<PropsValidated> {
  erros: FieldErros;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}