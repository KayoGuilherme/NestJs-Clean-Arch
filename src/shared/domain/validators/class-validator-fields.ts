import { validateSync } from "class-validator";
import { FieldErros, ValidatorFieldsInterface } from "./validator-fields.interface";

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated> {
  erros: FieldErros = null
  validatedData: PropsValidated = null

  validate(data: any): boolean {
      const erros = validateSync(data);
      if(erros.length) {
        this.erros = {}
        for(const error of erros) {
          const field = error.property;
          this.erros[field] = Object.values(error.constraints)
        }
      } else {
        this.erros = this.validatedData = data
      }
      return !erros.length
  }

}