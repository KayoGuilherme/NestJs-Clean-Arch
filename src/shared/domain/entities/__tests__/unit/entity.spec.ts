import { validate as uuidValidate } from "uuid";
import { Entity } from "../../entity";


type StubProps = {
  prop1: string;
  prop2: number;
}


class StubEntity extends Entity<StubProps> { }

describe('UserEntity unit tests', () => {

  it("Should set props and id", () => {
    const props = { prop1: 'value1', prop2: 15  }
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it("Should accept a valid uuid", () => {
    const props = { prop1: 'value1', prop2: 15  }
    const id = 'cd6d0503-9161-46b1-9349-627ed39b6a4d'
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity.id).toBe(id);
  });

  it("Should convert a entity to json", () => {
    const props = { prop1: 'value1', prop2: 15  }
    const id = 'cd6d0503-9161-46b1-9349-627ed39b6a4d'
    const entity = new StubEntity(props, id);

    expect(entity.toJson()).toStrictEqual({id, ...props});

  });


})