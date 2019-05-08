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
<div class="app" style="opacity: 0;">
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
                <button class="calculator__button calculator__button--clear" data-clear>AC</button>
                <button class="calculator__button calculator__button--save calculator__button--wide" data-save>SAVE</button>
                <button class="calculator__button calculator__button--operation" data-operation="/">÷</button>
                <button class="calculator__button calculator__button--decimal" data-decimal>.</button>
                <button class="calculator__button calculator__button--number" data-number="0">0</button>
                <button class="calculator__button calculator__button--blank"></button>
                <button class="calculator__button calculator__button--operation" data-operation="*">×</button>
                <button class="calculator__button calculator__button--number" data-number="1">1</button>
                <button class="calculator__button calculator__button--number" data-number="2">2</button>
                <button class="calculator__button calculator__button--number" data-number="3">3</button>
                <button class="calculator__button calculator__button--operation" data-operation="-">−</button>
                <button class="calculator__button calculator__button--number" data-number="4">4</button>
                <button class="calculator__button calculator__button--number" data-number="5">5</button>
                <button class="calculator__button calculator__button--number" data-number="6">6</button>
                <button class="calculator__button calculator__button--operation" data-operation="+">+</button>
                <button class="calculator__button calculator__button--number" data-number="7">7</button>
                <button class="calculator__button calculator__button--number" data-number="8">8</button>
                <button class="calculator__button calculator__button--number" data-number="9">9</button>
                <button class="calculator__button calculator__button--operation" data-equals>=</button>
            </div>
        </div>
    </div>
</div>

<script src="/js/app.js"></script>
</body>

</html>