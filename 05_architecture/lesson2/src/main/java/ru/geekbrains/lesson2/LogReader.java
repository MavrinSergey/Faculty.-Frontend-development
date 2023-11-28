package ru.geekbrains.lesson2;

import java.util.ArrayList;

/**
 * Базовый тип LoggerReader, определяет основу работы алгоритма чтения данных
 */
public abstract class LogReader {

    private Integer currentPosition = 0;

    public void setCurrentPosition(Integer currentPosition) {
        this.currentPosition = currentPosition;
    }

    /**
     * Шаблонный метод
     * @return
     */
    public Iterable<LogEntry> readLogEntry(){
        ArrayList<LogEntry> logEntries = new ArrayList<>();
        for (String s: readEntries(currentPosition))
        {
            logEntries.add(parseLogEntry(s));
        }
        return logEntries;
    }

    public abstract Object getDataSource();

    public abstract void setDataSource(Object data) throws Exception;

    protected abstract Iterable<String> readEntries(Integer position);

    protected abstract LogEntry parseLogEntry(String stringEntry);

}
