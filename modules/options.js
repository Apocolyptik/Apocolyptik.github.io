/**
 * Represents an array of available options
 */
 export class Options {
    /**
     * The array.
     */
    values = [];
  
    /**
     * Constructor
     * @param {Array} values - The options you want to initialize to provide as options.
     */
    constructor(values) {
      this.values = values;
    }
  
    /**
     * Allows you to return unique options of your specified quantity.
     * @param {*} num - The number of values to return.
     * @returns An array of values.
     */
    selectUnique = (num) => {
      const select = [];
      for (let i = 0; i < num; i++) {
        const result =
          this.values[Math.floor(Math.random() * this.values.length)];
        if (select.includes(result)) {
          i--;
        } else {
          select.push(result);
        }
      }
      return select;
    };
  
    /**
     * Joins the resulting array together with the provided spacer.
     * @param {*} separator - A string you want to have separating the values of the array.
     * @returns - A string.
     */
    join = (separator) => this.values.join((separator = ""));
  
    /**
     * Returns a single option.
     * @returns The single value as a string.
     */
    random = () => this.values[Math.floor(Math.random() * this.values.length)];
  }