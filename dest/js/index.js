angular.module('quoteGen', ['ngAnimate'])
.controller('QuoteListCtrl', function($scope, $timeout) {
  var quotes= [
    {id: 0, quote: 'Scientists are peeping toms at the keyhole of eternity.', author: 'Arthur Koestler'},
    {id: 1, quote: 'Facts are the air of the scientists. Without them you never can fly.', author: 'Ivan Pavlov'},
    {id: 2, quote: 'I have little patience with scientists who take a board of wood, look for its thinnest part, and drill a great number of holes where drilling is easy.', author: 'Albert Einstein'},
    {id: 3, quote: 'I worry about scientists discovering that lettuce has been fattening all along. . . .', author: 'Erma Bombeck'},
    {id: 4, quote: 'We are more often treacherous through weakness than through calculation.', author: 'François VI de la Rochefoucault'},
    {id: 5, quote: 'Believe those who are seeking the truth; doubt those who find it.', author: 'André Gide'},
    {id: 6, quote: 'Before enlightenment — chop wood, carry water. After enlightenment — chop wood, carry water.', author: 'Zen Buddhist Proverb'},
    {id: 7, quote: 'You never know what is enough, until you know what is more than enough. ', author: 'William Blake'},
    {id: 8, quote: 'Don\'t miss the donut by looking through the hole.', author: 'Unknown'},
    {id: 9, quote: 'No matter where you go or what you do, you live your entire life within the confines of your head', author: 'Terry Josephson'},
    {id: 10, quote: 'The obstacle is the path.', author: 'Zen proverb'},
    {id: 11, quote: 'One day, someone showed me a glass of water that was half full. And he said, "Is it half full or half empty?" So I drank the water. No more problem.', author: 'Alexander Jodorowsky'}
  ];
  
  $scope.change = function() {
    var randomIndex = (Math.round(Math.random()*11));
    $timeout(function() {
      $scope.newQuote = quotes[randomIndex];
    }, 00);
      
   
  };
})

.directive('animateOnChange', function($timeout) {
  return function (scope, elem, attr) {
    scope.$watch(attr.animateOnChange, function(nv, ov) {
      if(nv !== ov) {
        elem.addClass('changed');
        $timeout(function() {
          elem.removeClass('changed');
        }, 3000);
        }
      })
    }
});