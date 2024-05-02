import * as libClassValidator from "class-validator";
import { ClassValidatorFields } from "../../class-validator-fields";

class StubClassValidatorFields extends ClassValidatorFields<{ field: string }> { };


describe('ClassValidatorFields', () => {
  it('should initialize erros and validateData variables with null', () => {
    const sut = new StubClassValidatorFields;

    expect(sut.erros).toBeNull()
    expect(sut.validatedData).toBeNull()
  });


  it('should validate with errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([
      {
        property: 'field', constraints: { isRequired: 'test error' }
      }
    ])
    const sut = new StubClassValidatorFields;

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.erros).toStrictEqual({ field: ['test error'] })
  });
});