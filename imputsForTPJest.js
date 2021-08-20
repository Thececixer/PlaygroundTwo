//** Вкладка стоплимит рублевый инструмент */
label                         | stopPrice                   | limitPrice                   | lot
    ${'SlNull'}                   | ${'0'}                      | ${'0'}                       | ${'0'}
    ${'SlStopPLowerLimitPrice'}   | ${'1'}                      | ${'2'}                       | ${'1'}
    ${'SlStopPHigherLimitPrice'}  | ${'2'}                      | ${'1'}                       | ${'1'}
    ${'SlMinimum'}                | ${'0,01'}                   | ${'0,01'}                    | ${'1'}
    ${'SlIncorrectByStepStopP'}   | ${'0,001'}                  | ${'0,01'}                    | ${'1'}
    ${'SlIncorrectByStepLimitP'}  | ${'0,01'}                   | ${'0,001'}                   | ${'1'}
    ${'SlIncorrectByValueStopP'}  | ${'.[!#$%&,-./?@^_]PasВор'} | ${'0,01'}                    | ${'1'}
    ${'SlIncorrectByValueLimitP'} | ${'0,01'}                   | ${'.[!#$%&,-./?@^_]PasВорд'} | ${'1'}
    ${'SlIncorrectByValueLot'}    | ${'0,01'}                   | ${'0,01'}                    | ${'.[!#$%&,-./?@^_]PasВорд'}
    ${'SlIncorrectByLotStep'}     | ${'0,01'}                   | ${'0,01'}                    | ${'0.1'}
    ${'SlStopPriceNotExist'}      | ${''}                       | ${'0,01'}                    | ${'1'}
    ${'SlLimitPriceNotExist'}     | ${'0,01'}                   | ${''}                        | ${'1'}
    ${'SlLotNotExist'}            | ${'0,01'}                   | ${'0,01'}                    | ${''}
    ${'SlBigValue'}               | ${'10000000000'}            | ${'10000000000'}             | ${'10000000000'}
    ${'SlNegativeNumbers'}        | ${'-1'}                     | ${'-1'}                      | ${'-1'}

//** Вкладка stop-loss, рублевый инструмент */  

label                        | Price                       | lot
${'StoptNull'}                       | ${'0'}                      | ${'0'}
${'StopMinimum'}                       | ${'0.01'}                      | ${'1'}
${'StopIncorrectByStep'}                       | ${'0.001'}                      | ${'1'}
${'StopIncorrectByValue'}                       | ${'.[!#$%&,-./?@^_]PasВорд'}                      | ${'1'}
${'StopIncorrectBylot'}                       | ${'1'}                      | ${'.[!#$%&,-./?@^_]PasВорд'}
${'StopIncorrectBylotStep'}                       | ${'1'}                      | ${'0.1'}
${'StopPreiceNotExist'}                       | ${''}                      | ${'1'}
${'StopLotNotExist'}                       | ${'1'}                      | ${''}
${'StopBigValue'}                       | ${'100000000,01'}                      | ${'100000000'}
${'StopNegativeNumbers'}                       | ${'-1'}                      | ${'-1'}

//** Вкладка take-profit, рублевый инструмент */
label                   | Price                 | lot           | discretionOffsetValue     | pegOffsetValue
${'TpNull'}                   | ${'0'}                 | ${'0'}         | ${'0'}                    | ${'0'}
${'TpMinimum'}                   | ${'0.01'}                 | ${'1'}         | ${'0'}                    | ${'0'}
${'TpIncorrectByStep'}                   | ${'0.001'}                 | ${'1'}         | ${'0'}                    | ${'0'}
${'TpIncorrectByValue'}                   | ${'.[!#$%&,-./?@^_]PasВорд'}                 | ${'1'}         | ${'0'}                    | ${'0'}
${'TpIncorrectBylot'}                   | ${'1'}                 | ${'.[!#$%&,-./?@^_]PasВорд'}         | ${'0'}                    | ${'0'}
${'TpIncorrectBylotStep'}                   | ${'1'}                 | ${'0.1'}         | ${'0'}                    | ${'0'}
${'TpPreiceNotExist'}                   | ${''}                 | ${'1'}         | ${'0'}                    | ${'0'}
${'TpLotNotExist'}                   | ${'1'}                 | ${''}         | ${'0'}                    | ${'0'}
${'TpBigValue'}                   | ${'100000000,01'}                 | ${'100000000'}         | ${'0'}                    | ${'0'}
${'TpNegativeNumbers'}                   | ${'-1'}                 | ${'-1'}         | ${'0'}                    | ${'0'}
${'TpDiscretionPegMaxValue'}                   | ${'1'}                 | ${'1'}         | ${'100'}                    | ${'100'}
${'TpDiscretionPegNegativeMaxValue'}                   | ${'1'}                 | ${'1'}         | ${'-100'}                    | ${'-100'}
${'TpDiscretionPegMinValue'}                   | ${'1'}                 | ${'1'}         | ${'-0.01'}                    | ${'-0.01'}
${'TpDiscretionValueAbove100'}                   | ${'1'}                 | ${'1'}         | ${'100.01'}                    | ${'1'}
${'TpPegValueAbove100'}                   | ${'1'}                 | ${'1'}         | ${'1'}                    | ${'100.01'}
${'TpDiscretionNegativeValueAbove100'}                   | ${'1'}                 | ${'1'}         | ${'-100.01'}                    | ${'-10'}
${'TpPegNegativeValueAbove100'}                   | ${'1'}                 | ${'1'}         | ${'-10'}                    | ${'-100.01'}
${'TpDiscretionInvalidValue'}                   | ${'1'}                 | ${'1'}         | ${'.[!#$%&,-./?@^_]PasВорд'}                    | ${'10'}
${'TpPegInvalidValue'}                   | ${'1'}                 | ${'1'}         | ${'10'}                    | ${'.[!#$%&,-./?@^_]PasВорд'}
${'TpDiscretionNoExist'}                   | ${'1'}                 | ${'1'}         | ${''}                    | ${'100'}
${'TpPegNoExistF'}                   | ${'1'}                 | ${'1'}         | ${'100'}                    | ${''}

//** Вкладка TP SL, рублевый инструмент */
label                   | takeProfitPx           | stopPx                  | Price                 | lot           | discretionOffsetValue     | pegOffsetValue
${'TpSLNull'}                   | ${'0'}                 | ${'0'}                    | ${'0'}                 | ${'0'}         | ${'0'}                     | ${'0'}
${'TpSlMinimum'}                   | ${'0.01'}                 | ${'0.01'}                    | ${'0.01'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectByStepPrice'}                   | ${'1'}                 | ${'1'}                    | ${'0.001'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectByStepStopPx'}                   | ${'1'}                 | ${'0.001'}                    | ${'1'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectByStepTakeProfitP'}                   | ${'0.001'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectByValuePrice'}                   | ${'1'}                 | ${'1'}                    | ${'.[!#$%&,-./?@^_]PasВорд'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectByValueTakepPrP'}                   | ${'.[!#$%&,-./?@^_]PasВорд'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectByValueStopPx'}                   | ${'1'}                 | ${'.[!#$%&,-./?@^_]PasВорд'}                    | ${'1'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectBylot'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'.[!#$%&,-./?@^_]PasВорд'}         | ${'0'}                     | ${'0'}
${'TpSlIncorrectBylotStep'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'0.1'}         | ${'0'}                     | ${'0'}
${'TpSlPreiceNotExist'}                   | ${'1'}                 | ${'1'}                    | ${''}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlTakeProfitPxNotExist'}                   | ${''}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlStopPxNotExist'}                   | ${'1'}                 | ${''}                    | ${'1'}                 | ${'1'}         | ${'0'}                     | ${'0'}
${'TpSlLotNotExist'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${''}         | ${'0'}                     | ${'0'}
${'TpSlBigValue'}                   | ${'100000000,01'}                 | ${'100000000,01'}                    | ${'100000000,01'}                 | ${'100000000,01'}         | ${'0'}                     | ${'0'}
${'TpSlNegativeNumbers'}                   | ${'-1'}                 | ${'-1'}                    | ${'-1'}                 | ${'-1'}         | ${'0'}                     | ${'0'}
${'TpSlDiscretionPegMaxValue'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'100'}                     | ${'100'}
${'TpSlDiscretionPegNegativeMaxValue'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'-100'}                     | ${'-100'}
${'TpSlDiscretionPegMinValue'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'0.01'}                     | ${'0.01'}
${'TpSlDiscretionPegNegativeMinValue'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'-0.01'}                     | ${'-0.01'}
${'TpSlDiscretionValueAbove100'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'100.01'}                     | ${'1'}
${'TpSlPegValueAbove100'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'1'}                     | ${'100.01'}
${'TpSlDiscretionNegativeValueAbove100'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'-100.01'}                     | ${'-10'}
${'TpSlPegNegativeValueAbove100'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'10'}                     | ${'-100.01'}
${'TpSlDiscretionInvalidValue'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'.[!#$%&,-./?@^_]PasВорд'}                     | ${'10'}
${'TpSlPegInvalidValue'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'10'}                     | ${'.[!#$%&,-./?@^_]PasВорд'}
${'TpSlDiscretionNoExist'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${''}                     | ${'100'}
${'TpSlPegNoExist'}                   | ${'1'}                 | ${'1'}                    | ${'1'}                 | ${'1'}         | ${'100'}                     | ${''}


//** Вкладка Limit, рублевый инструмент */

label                        | Price                       | lot
${'LimittNull'}                       | ${'0'}                      | ${'0'}
${'LimitMinimum'}                       | ${'0.01'}                      | ${'1'}
${'LimitIncorrectByStep'}                       | ${'0.001'}                      | ${'1'}
${'LimitIncorrectByValue'}                       | ${'.[!#$%&,-./?@^_]PasВорд'}                      | ${'1'}
${'LimitIncorrectBylot'}                       | ${'1'}                      | ${'.[!#$%&,-./?@^_]PasВорд'}
${'LimitIncorrectBylotStep'}                       | ${'1'}                      | ${'0.1'}
${'LimitPreiceNotExist'}                       | ${''}                      | ${'1'}
${'LimitLotNotExist'}                       | ${'1'}                      | ${''}
${'LimitBigValue'}                       | ${'100000000,01'}                      | ${'100000000'}
${'LimitNegativeNumbers'}                       | ${'-1'}                      | ${'-1'}


//** Вкладка Market, рублевый инструмент */

label                                               | lot
${'MarketNull'}                                             | ${'0'}
${'MarketMinimum'}                                           | ${'1'}
${'MarketIncorrectBylot'}                                    | ${'.[!#$%&,-./?@^_]PasВорд'}
${'MarketIncorrectBylotStep'}                                | ${'0.1'}
${'MarketLotNotExist'}                                       | ${''}
${'MarketBigValue'}                                          | ${'100000000'}
${'MarketNegativeNumbers'}                                   | ${'-1'}
