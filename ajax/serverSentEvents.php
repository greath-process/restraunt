<?
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");
header("Access-Control-Allow-Origin: *");

$lastEventId = floatval(isset($_SERVER["HTTP_LAST_EVENT_ID"]) ? $_SERVER["HTTP_LAST_EVENT_ID"] : 0);

if ($lastEventId == 0) {

    $lastEventId = floatval(isset($_GET["lastEventId"]) ? $_GET["lastEventId"] : 0);

}

ob_start();

echo ":" . str_repeat(" ", 2048) . "\n"; // 2 kB padding for IE
echo "retry: 2000\n";

// event-stream
$i = $lastEventId;
$c = $i + 100;
/*
foreach($_SERVER as $key => $value)
{
	$text .= $key.' - '.$value.'   ';
}
*/
$text .= PHP_EOL;

while (++$i < $c) 
{
    echo "id: " . $i . PHP_EOL;
    echo "event: get_id" . PHP_EOL;
    echo "data: " . $i . ";" . $text;
    echo PHP_EOL . str_repeat(" ", 1024 * 64); // Заполняется ответ пробелами, необходимо для корректного вывода буфера

    ob_flush();
    flush();
    sleep(1);
}
?>