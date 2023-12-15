package ru.geekbrains.lesson2;

public abstract class BaseLogReaderCreator {

    public LogReader createLogReader(LogType logType, Object data) throws Exception {
        LogReader logReader = createLogReaderInstance(logType);
        //TODO: Подготовим данные, выполним базовые методы ...
        logReader.setDataSource(data);
        return logReader;
    }


    /**
     * Фабричный метод
     * @param logType
     * @return
     */
    protected abstract LogReader createLogReaderInstance(LogType logType);

}
