<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Calculator</title>

    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
</head>
<body>
<div class="app">
    <div class="app__inner">
        <div class="calculator">
            <div class="calculator__result">
                <div class="calculator__result-calculation">
                    
                </div>
                <div class="calculator__result-answer">
                    0
                </div>
            </div>
            <div class="calculator__buttons">
                <div class="calculator__button calculator__button--clear" data-clear>AC</div>
                <div class="calculator__button calculator__button--save calculator__button--wide" data-save>SAVE</div>
                <div class="calculator__button calculator__button--operation" data-operation="/">÷</div>
                <div class="calculator__button calculator__button--decimal" data-decimal>.</div>
                <div class="calculator__button calculator__button--number" data-number="0">0</div>
                <div class="calculator__button calculator__button--blank"></div>
                <div class="calculator__button calculator__button--operation" data-operation="*">×</div>
                <div class="calculator__button calculator__button--number" data-number="1">1</div>
                <div class="calculator__button calculator__button--number" data-number="2">2</div>
                <div class="calculator__button calculator__button--number" data-number="3">3</div>
                <div class="calculator__button calculator__button--operation" data-operation="-">−</div>
                <div class="calculator__button calculator__button--number" data-number="5">4</div>
                <div class="calculator__button calculator__button--number" data-number="6">5</div>
                <div class="calculator__button calculator__button--number" data-number="7">6</div>
                <div class="calculator__button calculator__button--operation" data-operation="+">+</div>
                <div class="calculator__button calculator__button--number" data-number="7">7</div>
                <div class="calculator__button calculator__button--number" data-number="8">8</div>
                <div class="calculator__button calculator__button--number" data-number="9">9</div>
                <div class="calculator__button calculator__button--operation" data-equals>=</div>
            </div>
        </div>
    </div>
</div>

<script src="/js/app.js"></script>
</body>

</html>