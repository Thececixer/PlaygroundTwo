/* Импуты для вкладки Limit, инструмент рублевый */
[
  {
    label: 'limitNull',
    value: {
      price: '0',
      lot: '0',
    },
  },
  {
    label: 'LimitMinimum',
    value: {
      price: '0.01',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectByStep',
    value: {
      price: '0.001',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectByValue',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectBylot',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'LimitIncorrectBylotStep',
    value: {
      price: '1',
      lot: '0.1',
    },
  },
  {
    label: 'LimitPreiceNotExist',
    value: {
      lot: '1',
    },
  },
  {
    label: 'LimitLotNotExist',
    value: {
      price: '1',
    },
  },
  {
    label: 'LimitBigValue',
    value: {
      price: '100000000,01',
      lot: '100000000',
    },
  },
  {
    label: 'LimitNegativeNumbers',
    value: {
      price: '-1',
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Limit, инструмент облигация с шагом цены 0.0001 */
[
  {
    label: 'limitNullO',
    value: {
      price: '0',
      lot: '0',
    },
  },
  {
    label: 'LimitMinimumO',
    value: {
      price: '0.01',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectByStepO',
    value: {
      price: '0.00001',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectByValueO',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectBylotO',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'LimitIncorrectBylotStepO',
    value: {
      price: '1',
      lot: '0.1',
    },
  },
  {
    label: 'LimitPreiceNotExistO',
    value: {
      lot: '1',
    },
  },
  {
    label: 'LimitLotNotExistO',
    value: {
      price: '1',
    },
  },
  {
    label: 'LimitBigValueO',
    value: {
      price: '10000000000,0001',
      lot: '100000000',
    },
  },
  {
    label: 'LimitNegativeNumbersO',
    value: {
      price: '-1',
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Limit, инструмент фьючерс с шагом 0.25 */
[
  {
    label: 'limitNullF',
    value: {
      price: '0',
      lot: '0',
    },
  },
  {
    label: 'LimitMinimumF',
    value: {
      price: '0.25',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectByStepF',
    value: {
      price: '0.4',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectByValueF',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'LimitIncorrectBylotF',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'LimitIncorrectBylotStepF',
    value: {
      price: '1',
      lot: '0.1',
    },
  },
  {
    label: 'LimitPreiceNotExistF',
    value: {
      lot: '1',
    },
  },
  {
    label: 'LimitLotNotExistF',
    value: {
      price: '1',
    },
  },
  {
    label: 'LimitBigValueF',
    value: {
      price: '10000000000',
      lot: '100000000',
    },
  },
  {
    label: 'LimitNegativeNumbersF',
    value: {
      price: '-1',
      lot: '-1',
    },
  },
];

/* Импуты для вкладки Market, инструмент рублевый */

[
  {
    label: 'MarkettNull',
    value: {
      lot: '0',
    },
  },
  {
    label: 'MarketMinimum',
    value: {
      lot: '1',
    },
  },
  {
    label: 'MarketIncorrectBylot',
    value: {
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'MarketIncorrectBylotStep',
    value: {
      lot: '0.1',
    },
  },
  {
    label: 'MarketLotNotExist',
    value: {},
  },
  {
    label: 'MarketBigValue',
    value: {
      lot: '100000000',
    },
  },
  {
    label: 'MarketNegativeNumbers',
    value: {
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Market, инструмент облигация */

[
  {
    label: 'MarkettNullO',
    value: {
      lot: '0',
    },
  },
  {
    label: 'MarketMinimumO',
    value: {
      lot: '1',
    },
  },
  {
    label: 'MarketIncorrectBylotO',
    value: {
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'MarketIncorrectBylotStepO',
    value: {
      lot: '0.1',
    },
  },
  {
    label: 'MarketLotNotExistO',
    value: {},
  },
  {
    label: 'MarketBigValueO',
    value: {
      lot: '100000000',
    },
  },
  {
    label: 'MarketNegativeNumbersO',
    value: {
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Market, инструмент фьючерс */

[
  {
    label: 'MarkettNullF',
    value: {
      lot: '0',
    },
  },
  {
    label: 'MarketMinimumF',
    value: {
      lot: '1',
    },
  },
  {
    label: 'MarketIncorrectBylotF',
    value: {
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'MarketIncorrectBylotStepF',
    value: {
      lot: '0.1',
    },
  },
  {
    label: 'MarketLotNotExistF',
    value: {},
  },
  {
    label: 'MarketBigValueF',
    value: {
      lot: '100000000',
    },
  },
  {
    label: 'MarketNegativeNumbersF',
    value: {
      lot: '-1',
    },
  },
];

/* Импуты для вкладки Stop-Loss, инструмент рублевый */

[
  {
    label: 'StoptNull',
    value: {
      price: '0',
      lot: '0',
    },
  },
  {
    label: 'StopMinimum',
    value: {
      price: '0.01',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectByStep',
    value: {
      price: '0.001',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectByValue',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectBylot',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'StopIncorrectBylotStep',
    value: {
      price: '1',
      lot: '0.1',
    },
  },
  {
    label: 'StopPreiceNotExist',
    value: {
      lot: '1',
    },
  },
  {
    label: 'StopLotNotExist',
    value: {
      price: '1',
    },
  },
  {
    label: 'StopBigValue',
    value: {
      price: '100000000,01',
      lot: '100000000',
    },
  },
  {
    label: 'StopNegativeNumbers',
    value: {
      price: '-1',
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Stop-Loss, инструмент облигация с шагом цены 0.0001 */
[
  {
    label: 'StopNullO',
    value: {
      price: '0',
      lot: '0',
    },
  },
  {
    label: 'StopMinimumO',
    value: {
      price: '0.01',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectByStepO',
    value: {
      price: '0.00001',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectByValueO',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectBylotO',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'StopIncorrectBylotStepO',
    value: {
      price: '1',
      lot: '0.1',
    },
  },
  {
    label: 'StopPreiceNotExistO',
    value: {
      lot: '1',
    },
  },
  {
    label: 'StopLotNotExistO',
    value: {
      price: '1',
    },
  },
  {
    label: 'StopBigValueO',
    value: {
      price: '10000000000,0001',
      lot: '100000000',
    },
  },
  {
    label: 'StopNegativeNumbersO',
    value: {
      price: '-1',
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Stop-Loss, инструмент фьючерс с шагом 0.25 */
[
  {
    label: 'StopNullF',
    value: {
      price: '0',
      lot: '0',
    },
  },
  {
    label: 'StopMinimumF',
    value: {
      price: '0.25',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectByStepF',
    value: {
      price: '0.4',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectByValueF',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'StopIncorrectBylotF',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'StopIncorrectBylotStepF',
    value: {
      price: '1',
      lot: '0.1',
    },
  },
  {
    label: 'StopPreiceNotExistF',
    value: {
      lot: '1',
    },
  },
  {
    label: 'StopLotNotExistF',
    value: {
      price: '1',
    },
  },
  {
    label: 'StopBigValueF',
    value: {
      price: '10000000000',
      lot: '100000000',
    },
  },
  {
    label: 'StopNegativeNumbersF',
    value: {
      price: '-1',
      lot: '-1',
    },
  },
];

/* Импуты для вкладки Stop-Limit, инструмент рублевый */

[
  {
    label: 'SlNull',
    value: {
      stopPrice: '0',
      limitPrice: '0',
      lot: '0',
    },
  },
  {
    label: 'SlStopPLowerLimitPrice',
    value: {
      stopPrice: '1',
      limitPrice: '2',
      lot: '1',
    },
  },
  {
    label: 'SlStopPHigerLimitPrice',
    value: {
      stopPrice: '2',
      limitPrice: '1',
      lot: '1',
    },
  },
  {
    label: 'SlMinimum',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByStepStopP',
    value: {
      stopPrice: '0,001',
      limitPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByStepLimitP',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,001',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueStopP',
    value: {
      stopPrice: '.[!#$%&,-./?@^_]PasВорд',
      limitPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueLimitP',
    value: {
      stopPrice: '0,01',
      limitPrice: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueLot',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,01',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'SlIncorrectBylotStep',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,01',
      lot: '0.1',
    },
  },
  {
    label: 'SlStopPreiceNotExist',
    value: {
      limitPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlLimitPreiceNotExist',
    value: {
      stopPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlLotNotExist',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,01',
    },
  },
  {
    label: 'SlBigValue',
    value: {
      stopPrice: '10000000000',
      limitPrice: '10000000000',
      lot: '100000000',
    },
  },
  {
    label: 'SlNegativeNumbers',
    value: {
      stopPrice: '-1',
      limitPrice: '-1',
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Stop-Limit, инструмент облигация с шагом цены 0.0001 */
[
  {
    label: 'SlNullO',
    value: {
      stopPrice: '0',
      limitPrice: '0',
      lot: '0',
    },
  },
  {
    label: 'SlStopPLowerLimitPriceO',
    value: {
      stopPrice: '1',
      limitPrice: '2',
      lot: '1',
    },
  },
  {
    label: 'SlStopPHigerLimitPriceO',
    value: {
      stopPrice: '2',
      limitPrice: '1',
      lot: '1',
    },
  },
  {
    label: 'SlMinimumO',
    value: {
      stopPrice: '0,0001',
      limitPrice: '0,0001',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByStepStopPO',
    value: {
      stopPrice: '0,000001',
      limitPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByStepLimitPO',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,00001',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueStopPO',
    value: {
      stopPrice: '.[!#$%&,-./?@^_]PasВорд',
      limitPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueLimitPO',
    value: {
      stopPrice: '0,01',
      limitPrice: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueLotO',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,01',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'SlIncorrectBylotStepO',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,01',
      lot: '0.1',
    },
  },
  {
    label: 'SlStopPreiceNotExistO',
    value: {
      limitPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlLimitPreiceNotExistO',
    value: {
      stopPrice: '0,01',
      lot: '1',
    },
  },
  {
    label: 'SlLotNotExistO',
    value: {
      stopPrice: '0,01',
      limitPrice: '0,01',
    },
  },
  {
    label: 'SlBigValueO',
    value: {
      stopPrice: '10000000000',
      limitPrice: '10000000000',
      lot: '100000000',
    },
  },
  {
    label: 'SlNegativeNumbersO',
    value: {
      stopPrice: '-1',
      limitPrice: '-1',
      lot: '-1',
    },
  },
];
/* Импуты для вкладки Stop-Limit, инструмент фьючерс с шагом цены 0.25 */
[
  {
    label: 'SlNullF',
    value: {
      stopPrice: '0',
      limitPrice: '0',
      lot: '0',
    },
  },
  {
    label: 'SlStopPLowerLimitPriceF',
    value: {
      stopPrice: '1',
      limitPrice: '2',
      lot: '1',
    },
  },
  {
    label: 'SlStopPHigerLimitPriceF',
    value: {
      stopPrice: '2',
      limitPrice: '1',
      lot: '1',
    },
  },
  {
    label: 'SlMinimumF',
    value: {
      stopPrice: '0,25',
      limitPrice: '0,25',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByStepStopPF',
    value: {
      stopPrice: '0,2',
      limitPrice: '0,25',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByStepLimitPF',
    value: {
      stopPrice: '0,25',
      limitPrice: '0,2',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueStopPF',
    value: {
      stopPrice: '.[!#$%&,-./?@^_]PasВорд',
      limitPrice: '0,25',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueLimitPF',
    value: {
      stopPrice: '0,25',
      limitPrice: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
    },
  },
  {
    label: 'SlIncorrectByValueLotF',
    value: {
      stopPrice: '0,25',
      limitPrice: '0,25',
      lot: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'SlIncorrectBylotStepF',
    value: {
      stopPrice: '0,25',
      limitPrice: '0,25',
      lot: '0.1',
    },
  },
  {
    label: 'SlStopPreiceNotExistF',
    value: {
      limitPrice: '1',
      lot: '1',
    },
  },
  {
    label: 'SlLimitPreiceNotExistF',
    value: {
      stopPrice: '1',
      lot: '1',
    },
  },
  {
    label: 'SlLotNotExistF',
    value: {
      stopPrice: '1',
      limitPrice: '1',
    },
  },
  {
    label: 'SlBigValueF',
    value: {
      stopPrice: '10000000000',
      limitPrice: '10000000000',
      lot: '100000000',
    },
  },
  {
    label: 'SlNegativeNumbersF',
    value: {
      stopPrice: '-1',
      limitPrice: '-1',
      lot: '-1',
    },
  },
];

/* Импуты для вкладки Take-Profit, инструмент рублевый */

[
  {
    label: 'TpNull',
    value: {
      price: '0',
      lot: '0',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpMinimum',
    value: {
      price: '0.01',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectByStep',
    value: {
      price: '0.001',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectByValue',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectBylot',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectBylotStep',
    value: {
      price: '1',
      lot: '0.1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpPreiceNotExist',
    value: {
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpLotNotExist',
    value: {
      price: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpBigValue',
    value: {
      price: '100000000,01',
      lot: '100000000',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpNegativeNumbers',
    value: {
      price: '-1',
      lot: '-1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpDiscretionPegMaxValue',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpDiscretionPegNegativeMaxValue',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100',
      pegOffsetValue: '-100',
    },
  },
  {
    label: 'TpDiscretionPegMinValue',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '0.01',
      pegOffsetValue: '0.01',
    },
  },
  {
    label: 'TpDiscretionPegNegativeMinValue',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-0.01',
      pegOffsetValue: '-0.01',
    },
  },
  {
    label: 'TpDiscretionValueAbove100',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100.01',
      pegOffsetValue: '1',
    },
  },
  {
    label: 'TpPegValueAbove100',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '1',
      pegOffsetValue: '100.01',
    },
  },
  {
    label: 'TpDiscretionNegativeValueAbove100',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100.01',
      pegOffsetValue: '-10',
    },
  },
  {
    label: 'TpPegNegativeValueAbove100',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-10',
      pegOffsetValue: '-100.01',
    },
  },
  {
    label: 'TpDiscretionInvalidValue',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
      pegOffsetValue: '10',
    },
  },
  {
    label: 'TpPegInvalidValue',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '10',
      pegOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'TpDiscretionNoExistF',
    value: {
      price: '1',
      lot: '1',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpPegNoExistF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
    },
  },
];
/* Импуты для вкладки Take-Profit, инструмент облигация с шагом 0.0001 */

[
  {
    label: 'TpNullO',
    value: {
      price: '0',
      lot: '0',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpMinimumO',
    value: {
      price: '0.0001',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectByStepO',
    value: {
      price: '0.000001',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectByValueO',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectBylotO',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectBylotStepO',
    value: {
      price: '1',
      lot: '0.1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpPreiceNotExistO',
    value: {
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpLotNotExistO',
    value: {
      price: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpBigValueO',
    value: {
      price: '100000000,001',
      lot: '100000000',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpNegativeNumbersO',
    value: {
      price: '-1',
      lot: '-1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpDiscretionPegMaxValueO',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpDiscretionPegNegativeMaxValueO',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100',
      pegOffsetValue: '-100',
    },
  },
  {
    label: 'TpDiscretionPegMinValueO',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '0.01',
      pegOffsetValue: '0.01',
    },
  },
  {
    label: 'TpDiscretionPegNegativeMinValueO',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-0.01',
      pegOffsetValue: '-0.01',
    },
  },
  {
    label: 'TpDiscretionValueAbove100O',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100.01',
      pegOffsetValue: '1',
    },
  },
  {
    label: 'TpPegValueAbove100O',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '1',
      pegOffsetValue: '100.01',
    },
  },
  {
    label: 'TpDiscretionNegativeValueAbove100O',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100.01',
      pegOffsetValue: '-10',
    },
  },
  {
    label: 'TpPegNegativeValueAbove100O',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-10',
      pegOffsetValue: '-100.01',
    },
  },
  {
    label: 'TpDiscretionInvalidValueO',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
      pegOffsetValue: '10',
    },
  },
  {
    label: 'TpPegInvalidValueO',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '10',
      pegOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'TpDiscretionNoExistO',
    value: {
      price: '1',
      lot: '1',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpPegNoExistO',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
    },
  },
];
/* Импуты для вкладки Take-Profit, инструмент фьючерс c ifujv 0,25 */

[
  {
    label: 'TpNullF',
    value: {
      price: '0',
      lot: '0',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpMinimumF',
    value: {
      price: '0.25',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectByStepF',
    value: {
      price: '0.001',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectByValueF',
    value: {
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectBylotF',
    value: {
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpIncorrectBylotStepF',
    value: {
      price: '1',
      lot: '0.1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpPreiceNotExistF',
    value: {
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpLotNotExistF',
    value: {
      price: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpBigValueF',
    value: {
      price: '100000000,01',
      lot: '100000000',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpNegativeNumbersF',
    value: {
      price: '-1',
      lot: '-1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpDiscretionPegMaxValueF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpDiscretionPegNegativeMaxValueF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100',
      pegOffsetValue: '-100',
    },
  },
  {
    label: 'TpDiscretionPegMinValueF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '0.01',
      pegOffsetValue: '0.01',
    },
  },
  {
    label: 'TpDiscretionPegNegativeMinValueF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-0.01',
      pegOffsetValue: '-0.01',
    },
  },
  {
    label: 'TpDiscretionNoExistF',
    value: {
      price: '1',
      lot: '1',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpPegNoExistF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
    },
  },
  {
    label: 'TpDiscretionValueAbove100F',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '100.01',
      pegOffsetValue: '1',
    },
  },
  {
    label: 'TpPegValueAbove100F',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '1',
      pegOffsetValue: '100.01',
    },
  },
  {
    label: 'TpDiscretionNegativeValueAbove100F',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100.01',
      pegOffsetValue: '-10',
    },
  },
  {
    label: 'TpPegNegativeValueAbove100F',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '-10',
      pegOffsetValue: '-100.01',
    },
  },
  {
    label: 'TpDiscretionInvalidValueF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
      pegOffsetValue: '10',
    },
  },
  {
    label: 'TpPegInvalidValueF',
    value: {
      price: '1',
      lot: '1',
      discretionOffsetValue: '10',
      pegOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
];

/* Импуты для вкладки TP-SL, инструмент рублевый */

[
  {
    label: 'TpSLNull',
    value: {
      takeProfitPx: '0',
      stopPx: '0',
      price: '0',
      lot: '0',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlMinimum',
    value: {
      takeProfitPx: '0.01',
      stopPx: '0.01',
      price: '0.01',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepPrice',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '0.001',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepTakeProfitP',
    value: {
      takeProfitPx: '0.001',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepStopPx',
    value: {
      takeProfitPx: '1',
      stopPx: '0.001',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValuePrice',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValueTakepPrP',
    value: {
      takeProfitPx: '.[!#$%&,-./?@^_]PasВорд',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValueStopPx',
    value: {
      takeProfitPx: '1',
      stopPx: '.[!#$%&,-./?@^_]PasВорд',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectBylot',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectBylotStep',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '0.1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlPreiceNotExist',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlTakeProfitPxNotExist',
    value: {
      price: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlStopPxNotExist',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlLotNotExist',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlBigValue',
    value: {
      takeProfitPx: '100000000,01',
      stopPx: '100000000,01',
      price: '100000000,01',
      lot: '100000000',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlNegativeNumbers',
    value: {
      takeProfitPx: '-1',
      stopPx: '-1',
      price: '-1',
      lot: '-1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlDiscretionPegMaxValue',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpSlDiscretionPegNegativeMaxValue',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100',
      pegOffsetValue: '-100',
    },
  },
  {
    label: 'TpSlDiscretionPegMinValue',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0.01',
      pegOffsetValue: '0.01',
    },
  },
  {
    label: 'TpSlDiscretionPegNegativeMinValue',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-0.01',
      pegOffsetValue: '-0.01',
    },
  },
  {
    label: 'TpSlDiscretionValueAbove100',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100.01',
      pegOffsetValue: '1',
    },
  },
  {
    label: 'TpSlPegValueAbove100',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '1',
      pegOffsetValue: '100.01',
    },
  },
  {
    label: 'TpSlDiscretionNegativeValueAbove100',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100.01',
      pegOffsetValue: '-10',
    },
  },
  {
    label: 'TpSlPegNegativeValueAbove100',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-10',
      pegOffsetValue: '-100.01',
    },
  },
  {
    label: 'TpSlDiscretionInvalidValue',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
      pegOffsetValue: '10',
    },
  },
  {
    label: 'TpSlPegInvalidValue',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '10',
      pegOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'TpSlDiscretionNoExist',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpSlPegNoExist',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
    },
  },
];

/* Импуты для вкладки TP-SL, инструмент облигация с шагом 0.001 */

[
  {
    label: 'TpSLNullO',
    value: {
      takeProfitPx: '0',
      stopPx: '0',
      price: '0',
      lot: '0',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlMinimumO',
    value: {
      takeProfitPx: '0.001',
      stopPx: '0.001',
      price: '0.001',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepPriceO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '0.0001',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepTakeProfitPO',
    value: {
      takeProfitPx: '0.0001',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepStopPxO',
    value: {
      takeProfitPx: '1',
      stopPx: '0.0001',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValuePriceO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValueTakepPrPO',
    value: {
      takeProfitPx: '.[!#$%&,-./?@^_]PasВорд',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValueStopPxO',
    value: {
      takeProfitPx: '1',
      stopPx: '.[!#$%&,-./?@^_]PasВорд',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectBylotO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectBylotStepO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '0.1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlPreiceNotExistO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlTakeProfitPxNotExistO',
    value: {
      price: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlStopPxNotExistO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlLotNotExistO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlBigValueO',
    value: {
      takeProfitPx: '100000000,001',
      stopPx: '100000000,001',
      price: '100000000,001',
      lot: '100000000',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlNegativeNumbersO',
    value: {
      takeProfitPx: '-1',
      stopPx: '-1',
      price: '-1',
      lot: '-1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlDiscretionPegMaxValueO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpSlDiscretionPegNegativeMaxValueO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100',
      pegOffsetValue: '-100',
    },
  },
  {
    label: 'TpSlDiscretionPegMinValueO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0.01',
      pegOffsetValue: '0.01',
    },
  },
  {
    label: 'TpSlDiscretionPegNegativeMinValueO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-0.01',
      pegOffsetValue: '-0.01',
    },
  },
  {
    label: 'TpSlDiscretionValueAbove100O',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100.01',
      pegOffsetValue: '1',
    },
  },
  {
    label: 'TpSlPegValueAbove100O',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '1',
      pegOffsetValue: '100.01',
    },
  },
  {
    label: 'TpSlDiscretionNegativeValueAbove100O',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100.01',
      pegOffsetValue: '-10',
    },
  },
  {
    label: 'TpSlPegNegativeValueAbove100O',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-10',
      pegOffsetValue: '-100.01',
    },
  },
  {
    label: 'TpSlDiscretionInvalidValueO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
      pegOffsetValue: '10',
    },
  },
  {
    label: 'TpSlPegInvalidValueO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '10',
      pegOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'TpSlDiscretionNoExistO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpSlPegNoExistO',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
    },
  },
];

/* Импуты для вкладки TP-SL, инструмент фьючерс с шагом 0.25 */

[
  {
    label: 'TpSLNullF',
    value: {
      takeProfitPx: '0',
      stopPx: '0',
      price: '0',
      lot: '0',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlMinimumF',
    value: {
      takeProfitPx: '0.25',
      stopPx: '0.25',
      price: '0.25',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepPriceF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '0.2',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepTakeProfitPF',
    value: {
      takeProfitPx: '0.2',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByStepStopPxF',
    value: {
      takeProfitPx: '1',
      stopPx: '0.2',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValuePriceF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '.[!#$%&,-./?@^_]PasВорд',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValueTakepPrPF',
    value: {
      takeProfitPx: '.[!#$%&,-./?@^_]PasВорд',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectByValueStopPxF',
    value: {
      takeProfitPx: '1',
      stopPx: '.[!#$%&,-./?@^_]PasВорд',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectBylotF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '.[!#$%&,-./?@^_]PasВорд',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlIncorrectBylotStepF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '0.1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlPreiceNotExistF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlTakeProfitPxNotExistF',
    value: {
      price: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlStopPxNotExistF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      lot: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlLotNotExistF',
    value: {
      takeProfitPx: '0',
      stopPx: '0',
      price: '1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlBigValueF',
    value: {
      takeProfitPx: '100000000,25',
      stopPx: '100000000,25',
      price: '100000000,25',
      lot: '100000000',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlNegativeNumbersF',
    value: {
      takeProfitPx: '-1',
      stopPx: '-1',
      price: '-1',
      lot: '-1',
      discretionOffsetValue: '0',
      pegOffsetValue: '0',
    },
  },
  {
    label: 'TpSlDiscretionPegMaxValueF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpSlDiscretionPegNegativeMaxValueF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100',
      pegOffsetValue: '-100',
    },
  },
  {
    label: 'TpSlDiscretionPegMinValueF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '0.01',
      pegOffsetValue: '0.01',
    },
  },
  {
    label: 'TpSlDiscretionPegNegativeMinValueF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-0.01',
      pegOffsetValue: '-0.01',
    },
  },
  {
    label: 'TpSlDiscretionValueAbove100F',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100.01',
      pegOffsetValue: '1',
    },
  },
  {
    label: 'TpSlPegValueAbove100F',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '1',
      pegOffsetValue: '100.01',
    },
  },
  {
    label: 'TpSlDiscretionNegativeValueAbove100F',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-100.01',
      pegOffsetValue: '-10',
    },
  },
  {
    label: 'TpSlPegNegativeValueAbove100F',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '-10',
      pegOffsetValue: '-100.01',
    },
  },
  {
    label: 'TpSlDiscretionInvalidValueF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
      pegOffsetValue: '10',
    },
  },
  {
    label: 'TpSlPegInvalidValueF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '10',
      pegOffsetValue: '.[!#$%&,-./?@^_]PasВорд',
    },
  },
  {
    label: 'TpSlDiscretionNoExistF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      pegOffsetValue: '100',
    },
  },
  {
    label: 'TpSlPegNoExistF',
    value: {
      takeProfitPx: '1',
      stopPx: '1',
      price: '1',
      lot: '1',
      discretionOffsetValue: '100',
    },
  },
];
