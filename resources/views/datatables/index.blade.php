@extends('layouts.master')

@section('content')
    <table class="table table-bordered" id="c-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Inforest</th>
            </tr>
        </thead>
    </table>
@stop

@push('scripts')
<script>
$(function() {
    $('#c-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! route('datatables.data') !!}',
        columns: [
            { data: 'id', name: 'id' },
            { data: 'namerest', name: 'namerest' },
            { data: 'inforestr', name: 'inforestr' }
        ]
    });
});
</script>
@endpush
