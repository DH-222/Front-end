import {IContractFilter} from '@utils/interfaces';

export class ContractFilter implements IContractFilter {
  from = null;
  id = null;
  name = null;
  to = null;

  constructor(c?: IContractFilter) {
    if (c) {
      this.from = c.from ? c.from : null;
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.to = c.to ? c.to : null;
    }
  }
}
