package ru.geekbrains.lesson2;

public class Sample02 {

    public static void main(String[] args) throws Exception {

        LogReader poemReader =
                new ConcreteReaderCreator().createLogReader(LogType.Poem, Sample01.data);
        for (LogEntry log : poemReader.readLogEntry()){
            System.out.println(log.getText());
        }

    }

}
