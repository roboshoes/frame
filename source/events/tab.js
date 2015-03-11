define( function() {

    return function() {

        function onTouchStart( event ) {
            var timeout;

            function onTouchEnd() {
                removeListener();

                var custommEvent = document.createEvent( "Event" );
                custommEvent.initEvent( "tab", true, true );

                event.target.dispatchEvent( costumEvent );
            }

            function removeListener() {
                clearTimeout( timeout );
                document.removeEventListener( "touchend", onTouchEnd );
            }

            document.addEventListener( "touchend", onTouchEnd );

            timeout = setTimeout( removeListener, 300 );
        }

        document.addEventListener( "touchstart", onTouchStart );

        return {
            remove: function() {
                document.removeEventListener( "touchstart", onTouchStart );
            }
        };
    };

} );
